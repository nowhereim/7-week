const express = require("express");
const router = express.Router();
const Cart = require("./cart");
router.use("/cart", Cart);

module.exports = router;
