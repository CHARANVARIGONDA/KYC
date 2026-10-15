const express = require("express");
const router = express.Router();
const { submitKyc, getKycStatus } = require("../controllers/userController.js");
router.get("/status/:email", getKycStatus);
router.post("/", submitKyc);
module.exports = router;