const ReviewsService = require("../services/reviews");

class ReviewsController {
  reviewsService = new ReviewsService();

  postReview = async (req, res, next) => {
    try {
      const { name } = res.locals.user;
      const { goodsId } = req.params;
      const { review, reviewImage } = req.body;

      if (!review) {
        res.status(412).json({ errormessage: "리뷰 적어 주333" });
        return;
      }
      if (!name) {
        res.status(412).json({ errormessage: "이름이 읎어요??" });
        return;
      }
      if (!goodsId) {
        res.status(412).json({ errormessage: "없는 상품인디요?" });
        return;
      }

      const createReview = await this.reviewsService.createReview(
        name,
        goodsId,
        review,
        reviewImage
      );

      res.status(201).json({ message: "리뷰 등록", createReview });
    } catch (err) {
      const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
      console.log(errormessage);
      res.status(400).json(err);
    }
  };
  findAllReviews = async (req, res, next) => {
    try {
      const { goodsId } = req.params;

      const findAllReviews = await this.reviewsService.findAllReviews(goodsId);

      res.status(200).json({ data: findAllReviews });
    } catch (err) {
      const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
      console.log(errormessage);
      res.status(400).json({ errormessage });
    }
  };
  findAllImages = async (req, res, next) => {
    try {
      const { goodsId } = req.params;

      const findAllImages = await this.reviewsService.findAllImages(goodsId);
      res.status(200).json({ data: findAllImages });
    } catch (err) {
      const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
      console.log(errormessage);
      res.status(400).json({ errormessage });
    }
  };
  updateReview = async (req, res, next) => {
    try {
      const { name } = res.locals.user;
      const { reviewId } = req.params;
      const { review, reviewImage } = req.body;

      const updateReview = await this.reviewsService.updateReview(
        name,
        reviewId,
        review,
        reviewImage
      );
      if (updateReview[0] === 0) {
        return res.status(401).send({ errormessage: "존재하지 않는 리뷰입니덩" });
      } else if (updateReview[0] === 1) {
        return res.status(200).json({ message: "수정 완료!" });
      } else throw error;
    } catch (err) {
      if (err.code === -2) {
        res.status(401).send({ errormessage: "님꺼 아님ㅠㅠ" });
      } else {
        const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
        console.log(errormessage);
        res.status(400).json({ errormessage });
      }
    }
  };
  deleteReview = async (req, res, next) => {
    try {
      const { name } = res.locals.user;
      const { reviewId } = req.params;

      const deleteReview = await this.reviewsService.deleteReview(name, reviewId);
      if (deleteReview[0] === 0) {
        return res.status(401).send({ errormessage: "존재하지 않는 리뷰입니덩" });
      } else if (deleteReview[0] === 1) {
        return res.status(200).json({ message: "삭제 완료" });
      } else throw error;
    } catch (err) {
      if (err.code === -2) {
        res.status(401).send({ errormessage: "님꺼 아님ㅠㅠ" });
      } else {
        const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
        console.log(errormessage);
        res.status(400).json({ errormessage });
      }
    }
  };
}

module.exports = ReviewsController;
