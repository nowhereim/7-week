const express = require("express");
const router = express.Router();
const ReviewsController = require("../controllers/reviews");
const middleware = require("../middlewares/auth-middleware");
const reviewsController = new ReviewsController();

router.post("/:goodsId", middleware, reviewsController.postReview);
router.get("/:goodsId", reviewsController.findAllReviews);
router.get("/reviewImages/:goodsId", reviewsController.findAllImages);
router.patch("/:reviewId", middleware, reviewsController.updateReview);
router.delete("/:reviewId", middleware, reviewsController.deleteReview);

module.exports = router;
