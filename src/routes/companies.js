const express = require("express");
const router = express.Router();

// Define a route to handle GET requests to /companies/:id
const companiesController = require("../controllers/companiesController");

router.get("/:id", companiesController.getCompany);

module.exports = router;
