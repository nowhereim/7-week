const { Members } = require("../models");
const { Goods } = require("../models");
const { Reviews } = require("../models");

class ReviewsRepository {
  //작성자 확인
  findUser = async (name) => {
    const findUser = await Reviews.findOne({ where: { name } });
    return findUser;
  };
  //리뷰 작성
  createReview = async (name, goodsId, review, reviewImage, date) => {
    const goodsName = await Goods.findOne({ where: { goodsId } });
    const createReview = await Reviews.create({
      goodsId,
      goodsName: goodsName.goodsName,
      name,
      review,
      reviewImage,
      date,
    });

    return createReview;
  };
  //모든 리뷰 조회
  findAllReviews = async (goodsId) => {
    const findAllReviews = await Reviews.findAll({ where: { goodsId } });
    return findAllReviews;
  };
  //모든 리뷰 사진 조회
  findAllImages = async (goodsId) => {
    const findAllReviews = await Reviews.findAll({ where: { goodsId } });
    const findAllImages = [];
    for (let i = 0; i < findAllReviews.length; i++) {
      findAllImages.push(findAllReviews[i].reviewImage);
    }
    return findAllImages;
  };
  //리뷰 수정
  updateReview = async (reviewId, review, reviewImage, date) => {
    const updateReview = await Reviews.update(
      { review, reviewImage, date },
      { where: { reviewId } }
    );

    return updateReview;
  };
  //리뷰 삭제
  deleteReview = async (reviewId) => {
    const deleteReview = await Reviews.destroy({ where: { reviewId } });

    return deleteReview;
  };
}

module.exports = ReviewsRepository;
