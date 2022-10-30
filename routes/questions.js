const express = require("express");
const router = express.Router();
questioncontroller = require("../controllers/questions");
questioncontroller = new questioncontroller();

router.get("/", questioncontroller.getQuestion);
router.get("/:questionId", questioncontroller.getQuestionOne);
router.post("/", questioncontroller.createQuestion);
router.put("/", questioncontroller.updateQuestion);
router.delete("/", questioncontroller.deleteQuestion);

module.exports = router;
