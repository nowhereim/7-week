const express = require("express");
const router = express.Router();
const GoodsController = require("../controllers/goods");
const goodsController = new GoodsController();

router.post("/", goodsController.postGoods);

module.exports = router;
