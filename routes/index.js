const express = require("express");
const router = express.Router();
const Cart = require("./cart");
router.use("/cart", Cart);

const Goods = require("./goods");

router.use("/goods", Goods);

const membersRouter = require("./members");

router.use("/members", membersRouter);

module.exports = router;
