const express = require("express");
const router = express.Router();

const Goods = require("./goods");

router.use("/goods", Goods);

module.exports = router;
