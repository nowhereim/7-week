const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/auth-middleware");
Questioncontroller = require("../controllers/questions");
questioncontroller = new Questioncontroller();

router.post("/", middleware, questioncontroller.createAnswer);
router.put("/", middleware, questioncontroller.updateAnswer);
router.delete("/", middleware, questioncontroller.deleteAnswer);
router.get("/", middleware, questioncontroller.getAnswer);
router.get("/:answerId", middleware, questioncontroller.getAnswerOne);

module.exports = router;
