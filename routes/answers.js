const express = require("express");
const router = express.Router();
Questioncontroller = require("../controllers/questions");
questioncontroller = new Questioncontroller();

router.post("/", questioncontroller.createAnswer);
router.put("/", questioncontroller.updateAnswer);
router.delete("/", questioncontroller.deleteAnswer);
router.get("/", questioncontroller.getAnswer);
router.get("/:answerId", questioncontroller.getAnswerOne);

module.exports = router;
