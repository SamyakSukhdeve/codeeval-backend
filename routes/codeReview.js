const express = require("express");
const reviewController = require("../controllers/reviewController");

const router = express.Router();

router.post("/review", reviewController);

module.exports = router;
