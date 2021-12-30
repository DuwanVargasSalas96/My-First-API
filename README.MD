# First API
I'm developing my first RestAPI.

# Packages needed
Install the next packages:

1. > `npm install express --save`
2. > `npm install body-parser`
3. > `npm install -g nodemon`
4. > `npm install mongodb`

# Server start
Start server with the next command:

> `node ./index.js`

# Status
Status code of an API.

| Status | Description  |
|--------|--------------|
| 200    | Ok           |
| 201    | Created      |
| 400    | Bad request  |
| 401    | Unauthorized |
| 404    | Not found    |

# Connection to database MongoDB
To connect a database of MongoDB in this API, follow the next steps:

1. Change the extension of the file  `database/db.txt` to `database/db.js`.
2. In the file `database/db.js`, change value of the `const url` to the string connection of MongoDB.
3. In the file `database/db.js`, change value of the `const databaseName` to the name of your database.
4. In the file `database/db.js`, change value of the `const databaseCollection` to the name of your collection.