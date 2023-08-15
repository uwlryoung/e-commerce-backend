# E-commerce Database
![License](https://img.shields.io/badge/License-MIT_License-blue.svg)
  
  ## Description
  The backend for an e-commerce site. With this, users can get, add, delete and update products, categories, and product tags. 
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [How to Contribute](#how-to-contribute)
  - [License](#license)
  - [How to Test](#how-to-test)
  - [Questions](#questions)
  

  ## Installation
  Clone the respository from GitHub into a desired location. 

  ### Required Tools (download separately)
  - [Node.js](https://nodejs.org/en)
  - [MySQL](https://www.mysql.com/)
  - See below for the rest of the tools that are installed using [npm](https://www.npmjs.com/). 
  
  ### Preparing to use - further installation
  1. Open a terminal in the folder and run `npm i` to install of the dependencies: [Dotenv](https://www.npmjs.com/package/dotenv), [Express.js](https://expressjs.com/), [MySQL2](https://www.npmjs.com/package/mysql2), [Sequelize](https://sequelize.org/). [Nodemon](https://www.npmjs.com/package/nodemon) is also used as a DevDependency.
  2. Navigate to the `db folder`. Login to your MySQL account by typing `mysql -u root -p`. You will be prompted to input your username. Once logged in, type in `SOURCE schema.sql` to create your database titled `ecommerce_db`. Type in `USE ecommerce_db` to use it. You may exit MySQL at this point.
  3. After exiting MySQL, or opening another terminal window in the project's folder, type `npm run seed` to add data to the database.
  4. Create a .env file in the root of the folder. Fill in the missing information between the ' ' quotes: 

    DB_NAME=''
    DB_USER=''
    DB_PASSWORD=''
The database is now ready to use.

  ## Usage
  - Start the server by typing `node server.js` in the terminal. 
  - Use an API interface such as [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) (Thunder Client is a VS Code extension)
  - Make `GET`, `POST`, `PUT`, `DELETE` requests: 
    ### GET
    Use the URL base: http://localhost:3001/api/. Follow this with either `/categories`, `/products`, `/tags` to get a list of all items in the request. Add an `/id` at the end of that to get an single item (e.g.: `/categories/2` will return the category with an id of '2').
    ### POST
    Use the URL base: http://localhost:3001/api/. Follow this with either `/categories`, `/products`, `/tags` depending on which one you want to add a new item. Use JSON text to add to the body of the request. 
    
        Category Example
        {
	      "category_name": "Sports"
        }

        Product Example
        {
          "product_name": "Basketball",
          "price": 200.00,"stock": 3,
          "category_id": 3,
          "tagIds": [1, 2, 3, 4]
        }

        Tag Example
        {
	      "category_name": "Milwaukee Bucks"
        }
     ### PUT
     Use the URL base: http://localhost:3001/api/. Follow this with either `/categories/id`, `/products/id`, `/tags/id` depending on which item you want to update. (`id` is the id number of the item you would like to update) Use JSON text to add to the body of the request. This is the same as POST requests, see above. (e.g.: `/categories/2` and with the proper JSON body input will update the category with an id of '2').
     ### DELETE
    Use the URL base: http://localhost:3001/api/. Follow this with either `/categories/id`, `/products/id`, `/tags/id` depending on which item you want to delete. (`id` is the id number of the item you would like to delete). (e.g.: `/categories/2` will delete the category with an id of '2'). **Warning: When deleting a category, it will delete any associated products, as well.**

See here for a [Video demonstration](https://drive.google.com/file/d/1IrBR1yG-053EQMjteomi-REJZyBZqrUE/view?usp=sharing).

Example of a GET CATEGORIES request using Insomnia: 
![Get Categories Request](/assets/API-Requests.png)

Example of a PUT PRODUCT (update) request using Insomnia: 
![Get Categories Request](/assets/API-UPDATE.png)

All of the other requests are done similarly just by changing the URL in the API interface. See the above instructions about what to insert as URLs for the different types of requests.
      

  ## Credits
  Starter Code provided by the GW Fullstack Web Development Bootcamp.

  ## How to Contribute
  Fork the repository and push changes. Changes will be reviewed. 

   ## How to Test
  Test the program by running it and using an API interface such as Insomnia. 

  ## License 
  E-commerce Database is covered under the MIT License.

  ## Questions
  [GitHub Profile](https://github.com/uwlryoung)

  If you have any questions, feel free to email uwlryoung@gmail.com

  
  