const express = require("express");
const router = express.Router();
const Cart = require("./cart");
const Goods = require("./goods");
const Reviews = require("./reviews");
const membersRouter = require("./members");

router.use("/cart", Cart);
router.use("/reviews", Reviews);
router.use("/goods", Goods);
router.use("/members", membersRouter);
router.use("/question", qeustion);
router.use("/answer", answer);

module.exports = router;
