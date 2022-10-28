const express = require("express");
const router = express.Router();
const GoodsController = require("../controllers/goods");
const goodsController = new GoodsController();

router.post("/", goodsController.postGoods);
router.get("/", goodsController.findAllGoods);
router.patch("/:goodsId", goodsController.updateGoods);
router.delete("/:goodsId", goodsController.deleteGoods);

module.exports = router;
