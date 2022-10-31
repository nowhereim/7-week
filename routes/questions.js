const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/auth-middleware");
questioncontroller = require("../controllers/questions");
questioncontroller = new questioncontroller();

router.get("/", middleware, questioncontroller.getQuestion);
router.get("/:questionId", middleware, questioncontroller.getQuestionOne);
router.post("/", middleware, questioncontroller.createQuestion);
router.put("/", middleware, questioncontroller.updateQuestion);
router.delete("/", middleware, questioncontroller.deleteQuestion);

module.exports = router;
