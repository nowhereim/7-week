const GoodsService = require("../services/goods");

class GoodsController {
  GoodsService = new GoodsService();
  //상품등록
  postGoods = async (req, res, next) => {
    try {
      const {
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
      } = req.body;

      const createGoods = await this.GoodsService.createGoods(
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

      res.status(201).json({ message: "상품 등록 완료~", createGoods });
    } catch (err) {
      const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
      console.log(errormessage);
      res.status(400).json({ errormessage });
    }
  };
}

module.exports = GoodsController;
