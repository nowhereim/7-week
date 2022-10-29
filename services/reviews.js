const ReviewsRepository = require("../repositories/reviews");

class ReviewsService {
  reviewsRepository = new ReviewsRepository();

  createReview = async (name, goodsId, review, reviewImage) => {
    const createReview = await this.reviewsRepository.createReview(
      name,
      goodsId,
      review,
      reviewImage
    );

    return createReview;
  };

  findAllReviews = async (goodsId) => {
    const findAllReviews = await this.reviewsRepository.findAllReviews(goodsId);

    return findAllReviews;
  };

  findAllImages = async (goodsId) => {
    const findAllImages = await this.reviewsRepository.findAllImages(goodsId);

    return findAllImages;
  };

  updateReview = async (name, reviewId, review, reviewImage) => {
    const findUser = await this.reviewsRepository.findUser(name);

    if (findUser.name !== name) {
      throw { code: -2 };
    }

    const updateReview = await this.reviewsRepository.updateReview(reviewId, review, reviewImage);

    return updateReview;
  };

  deleteReview = async (name, reviewId) => {
    const findUser = await this.reviewsRepository.findUser(name);

    if (findUser.name !== name) {
      throw { code: -2 };
    }

    const deleteReview = await this.reviewsRepository.deleteReview(reviewId);

    return deleteReview;
  };
}

module.exports = ReviewsService;
