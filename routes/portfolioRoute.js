const express = require("express");
const { sendEmailController } = require("../controllers/portfolioContoller");

const router = express.Router();

router.post("/sendEmail", sendEmailController);

module.exports = router;
