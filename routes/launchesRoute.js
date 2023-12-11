const express = require("express");
// On va stocker ici toutes les routes
const router = express.Router();

const launchesController = require("../controller/launchesController");

router
    .route("/")
    .get(launchesController.listAllLaunches)

module.exports = router;
