const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/auth-middleware");
const MembersController = require("../controllers/members");
const membersController = new MembersController();

router.post("/signup", membersController.SignupMember);
router.post("/login", membersController.LoginMember);
router.put("/login", middleware, membersController.updateMember);
router.delete("/login", middleware, membersController.deleteMember);
router.get("/signup", membersController.FindId);
module.exports = router;
