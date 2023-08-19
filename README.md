# f-ORM-ation - E-COMMERCE BACK END

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

> ## DESCRIPTION
  For an e-commerce business manager, a way to manage your product. You can:
  - View all or just one category, showing the products that belong to the category
  - View all or just one tag, showing all products that belong to each tag
  - View all or just one product, showing the category it belongs to and any tags it has
  - Create, update or delete categories, tags, and products


## TABLE OF CONTENTS
  1. [Description](#description)
  2. [Usage](#usage)
  3. [References](#references)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Questions](#questions)

> ## USAGE

#### Install all npm packages<br/>
#### From your MySql shell, run the db/schema.sql file <br/>
#### Run npm start from the terminal to sync the Sequelize models to MySQL database<br/>
#### Using Insomnia, send GET routes at `localhost:3001/api/categories` to VIEW ALL CATEGORIES, `localhost:3001/api/tags` to VIEW ALL TAGS, `localhost:3001/api/products` to VIEW ALL PRODUCTS.<br/><br/>![view all products](./images/.png)<br/>
#### To view a specific category, tag or product, add /`id` of the specific item you'd like to view at the end of the URL of the GET route. Example: `localhost:3001/api/products/3`<br/><br/>![view product](./images/.png)
#### Create POST route to CREATE a category, tag or product, sending the data in JSON format.<br/><br/>![create product](./images/.png)<br/><br/>
#### Create PUT route to UPDATE a category, tag or product, adding the desired /`id` at the end of the url request. Example: `localhost:3001/api/products/6` Sending the updated data in JSON format.<br/><br/>![update product](./images/.png)<br/><br/>

#### Create DELETE route to DELETE a category, tag or product, adding the desired /`id` at the end of the url request. Example: `localhost:3001/api/products/6`.<br/><br/>![delete product](./images/.png)<br/><br/>


> ## REFERENCES
- UDEMY Jonas Schmedtmann courses (https://codingheroes.io/resources/)
- UDEMY Dr Angela Yu (https://appbrewery.com/)
- UDEMY Colt Steele - The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert (https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/)
- W3Schools (https://www.w3schools.com/)
- UConn Coding Bootcamp - Module 13 SQL Lessons

> ## LICENSE
![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)<br/>
Please see the LICENSE file for details


> ## CONTRIBUTING
#### If you are interested in contributing to this project, please follow these steps:
- Fork the repo on GitHub
- Clone the project to your own machine
- Commit changes to your own branch
- Push your work back up to your fork
- Submit a pull request for review

> ## QUESTIONS
For any questions, please reach out to me via GitHub (https://github.com/SLAYsian).