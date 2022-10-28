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

  findAllGoods = async () => {
    const findAllGoods = await this.goodsRepository.findAllGoods();

    return findAllGoods;
  };
}

module.exports = GoodsService;
