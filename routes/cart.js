const express = require("express");
const router = express.Router();
Cartcontroller = require("../controllers/cart.js");
cartcontroller = new Cartcontroller();
const middleware = require("../middlewares/auth-middleware");

router.get("/:userId", middleware, cartcontroller.getCart);
router.post("/", middleware, cartcontroller.createCart);
router.put("/", middleware, cartcontroller.updateCart);
router.delete("/", middleware, cartcontroller.deleteCart);
router.delete("/all", middleware, cartcontroller.deleteAllCart);

module.exports = router;
