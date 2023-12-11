const express = require("express");

const router = express.Router();

const launchesController = require("../controller/launchesController");

router
    .route("/")
    .get(launchesController.listAllLaunches)

module.exports = router;
