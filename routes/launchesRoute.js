const express = require("express");

const router = express.Router();

const launchesController = require("../controller/launchesController");

router
    .route("/flight")
    .get(launchesController.listAllLaunches)

    router.route("/list").get(launchesController.listLaunches)

module.exports = router;
