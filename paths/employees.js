// Create const
const express = require('express');
const mongodb = require("../database/db");
const router = express.Router();

// Connect to database
mongodb.connection(function(collection) {
    // Get API global
    router.get("/", function(request, response) {
        // Find all documents
        collection.find().toArray((error, employees) => {
            // Errors control
            if (error) {
                // Print
                throw error;
            }
            else {
                // Print
                response.json(employees);
            }
        });
    });

    // GET API identify
    router.get("/:identify", function(request, response) {
        // Create const
        let employeeIdentify = parseInt(request.params.identify);

        // Search employee
        collection.findOne({ "identify" : employeeIdentify }, (error, employee) => {
            // Errors control
            if (error) {
                // Print
                throw error;
            }
            else {
                // Print
                response.status(200).json(employee);
            }
        });
    });

    // POST API
    router.post("/", function(request, response) {
        // Create const
        const employee = request.body;

        // Registrar empleado
        collection.insertOne( employee , (error, result) => {
            // Errors control
            if (error) {
                // Print
                throw error;
            }
            else {
                // Print
                response.sendStatus(201);
            }
        });
    });

    // PUT API
    router.put("/:identify", function(request, response) {
        // Create const
        const employeeIdentify = parseInt(request.params.identify);
        const newDataEmployee = request.body;

        // Update
        collection.updateOne({ "identify" : employeeIdentify }, { $set : newDataEmployee }, (error, result) => {
            // Errors control
            if (error) {
                // Print
                throw error;
            }
            else {
                // Print
                response.sendStatus(200);
            }
        });
    });

    // DELETE ALL API
    router.delete("/", function(request, response) {
        // Delete employee
        collection.deleteMany({ }, (error, result) => {
            // Errors control
            if (error) {
                // Print
                throw error;
            }
            else {
                // Print
                response.sendStatus(200);
            }
        });
    });

    // DELETE API identify
    router.delete("/:identify", function(request, response) {
        // Catch identify
        let employeeIdentify = parseInt(request.params.identify);

        // Delete employee
        collection.deleteOne({ "identify" : employeeIdentify }, (error, result) => {
            // Errors control
            if (error) {
                // Print
                throw error;
            }
            else {
                // Print
                response.sendStatus(200);
            }
        });
    });
});

// Exports
module.exports = router;