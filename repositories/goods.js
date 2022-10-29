const { Goods } = require("../models");

class GoodsRepository {
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
    const createGoods = await Goods.create({
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
      brand,
    });

    return createGoods;
  };

  //모든 상품 보기
  findAllGoods = async () => {
    const findAllGoods = await Goods.findAll();

    return findAllGoods;
  };

  //특정 상품 보기
  findGoods = async (goodsId) => {
    const findAllGoods = await Goods.findAll({ where: { goodsId } });

    return findAllGoods;
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
    const updateGoods = await Goods.update(
      {
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
        brand,
      },
      { where: { goodsId } }
    );

    return updateGoods;
  };

  //상품 삭제
  deleteGoods = async (goodsId) => {
    const deleteGoods = await Goods.destroy({ where: { goodsId } });

    return deleteGoods;
  };
}

module.exports = GoodsRepository;
