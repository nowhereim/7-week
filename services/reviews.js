const ReviewsRepository = require("../repositories/reviews");

class ReviewsService {
  reviewsRepository = new ReviewsRepository();

  createReview = async (name, goodsId, review, reviewImage) => {
    let today = new Date();

    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);

    let dateString = year + "." + month + "." + day;
    const createReview = await this.reviewsRepository.createReview(
      name,
      goodsId,
      review,
      reviewImage,
      dateString
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
    if (!findUser) {
      throw { code: -2 };
    } else if (findUser.name !== name) {
      throw { code: -2 };
    }

    let today = new Date();

    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);

    let dateString = year + "." + month + "." + day;

    const updateReview = await this.reviewsRepository.updateReview(
      reviewId,
      review,
      reviewImage,
      dateString
    );

    return updateReview;
  };

  deleteReview = async (name, reviewId) => {
    const findUser = await this.reviewsRepository.findUser(name);

    if (!findUser) {
      throw { code: -2 };
    } else if (findUser.name !== name) {
      throw { code: -2 };
    }

    const deleteReview = await this.reviewsRepository.deleteReview(reviewId);

    return deleteReview;
  };
}

module.exports = ReviewsService;
