//Create const
const express = require("express");
const server = express();
const employees = require("./paths/employees");

//Set parser
server.use(express.json());

//GET API employees
server.use("/employees", employees);

//GET API Global
server.use("/", function(request, response) {
    //Print
    response.send("Hola Mundo!");
});

//Server start
server.listen(4000, () => {
    //Log
	console.log("Server Started");
});