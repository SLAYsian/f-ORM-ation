const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ 
        model: Product, 
        through: ProductTag,
        as: 'associated_products' 
      }]
    });
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{
        model: Product,
        through: ProductTag,
        as: 'associated_products'
      }]
    });
    if (!tagData) {
      res.status(404).json({ message: `No tag found with the id: ${req.params.id}!` });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    if (req.body.productIds && req.body.productIds.length) {
      const productTagIdArr = req.body.productIds.map((product_id) => {
        return {
          tag_id: tagData.id,
          product_id
        };
      });
      await ProductTag.bulkCreate(productTagIdArr)
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update({
      tag_name: req.body.tag_name
    }, {
      where: {
        id: req.params.id
      }
    });
    if (req.body.productsIds) {
      const currentProductTags = await ProductTag.findAll({
        where: { tag_id: req.params.id }
      });
      const currentProductIds = currentProductTags.map(({ product_id }) => product_id);
      const newProductIds = req.body.productIds.filter(product_id => !currentProductIds.includes(product_id));
      const removedProductIds = currentProductIds.filter(product_id => !req.body.productIds.includes(product_id));

      await ProductTag.bulkCreate(newProductIds.map(product_id => {
        return {
          tag_id: req.params.id,
          product_id
        };
      }));

      await ProductTag.destroy({
        where: {
          tag_id: req.params.id,
          product_id: removedProductIds
        }
      });
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ message: `No tag found with this id: ${req.params.id}!`});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
