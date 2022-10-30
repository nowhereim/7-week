const express = require("express");
const router = express.Router();
Cartcontroller = require("../controllers/cart.js");
cartcontroller = new Cartcontroller();

router.get("/", cartcontroller.getCart);
router.post("/", cartcontroller.createCart);
router.put("/", cartcontroller.updateCart);
router.delete("/", cartcontroller.deleteCart);
router.delete("/all", cartcontroller.deleteAllCart);

module.exports = router;
