const GoodsRepository = require("../repositories/goods");

class GoodsService {
  goodsRepository = new GoodsRepository();

  // 상품 생성
  createGoods = async (
    category,
    goodsImage,
    goodsName,
    goodsPrice,
    goodsSale,
    delivery,
    seller,
    deliveryType,
    salesUnit,
    volume,
    origin,
    allergy,
    shelfLife,
    notification,
    exImage1,
    exName1,
    exContent1,
    exImage2,
    exName2,
    exContent2,
    ingredients,
    process,
    recommendation,
    brand
  ) => {
    const createGoods = await this.goodsRepository.createGoods(
      category,
      goodsImage,
      goodsName,
      goodsPrice,
      goodsSale,
      delivery,
      seller,
      deliveryType,
      salesUnit,
      volume,
      origin,
      allergy,
      shelfLife,
      notification,
      exImage1,
      exName1,
      exContent1,
      exImage2,
      exName2,
      exContent2,
      ingredients,
      process,
      recommendation,
      brand
    );
    return createGoods;
  };

  //모든 상품 보기
  findAllGoods = async () => {
    const findAllGoods = await this.goodsRepository.findAllGoods();

    return findAllGoods;
  };

  //특정 상품 보기
  findGoods = async (goodsId) => {
    const findGoods = await this.goodsRepository.findGoods(goodsId);
    if (!findGoods) throw { code: -1 };

    return findGoods;
  };

  //상품 수정
  updateGoods = async (
    goodsId,
    category,
    goodsImage,
    goodsName,
    goodsPrice,
    goodsSale,
    delivery,
    seller,
    deliveryType,
    salesUnit,
    volume,
    origin,
    allergy,
    shelfLife,
    notification,
    exImage1,
    exName1,
    exContent1,
    exImage2,
    exName2,
    exContent2,
    ingredients,
    process,
    recommendation,
    brand
  ) => {
    const updateGoods = await this.goodsRepository.updateGoods(
      goodsId,
      category,
      goodsImage,
      goodsName,
      goodsPrice,
      goodsSale,
      delivery,
      seller,
      deliveryType,
      salesUnit,
      volume,
      origin,
      allergy,
      shelfLife,
      notification,
      exImage1,
      exName1,
      exContent1,
      exImage2,
      exName2,
      exContent2,
      ingredients,
      process,
      recommendation,
      brand
    );
    if (!updateGoods) throw { code: -1 };

    return updateGoods;
  };

  //상품 삭제
  deleteGoods = async (goodsId) => {
    const deleteGoods = await this.goodsRepository.deleteGoods(goodsId);
    if (!deleteGoods) throw { code: -1 };

    return deleteGoods;
  };
}

module.exports = GoodsService;
