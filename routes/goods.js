const express = require("express");
const router = express.Router();
const GoodsController = require("../controllers/goods");
const goodsController = new GoodsController();

router.post("/", goodsController.postGoods);
router.get("/", goodsController.findAllGoods);

module.exports = router;
