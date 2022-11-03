const GoodsService = require("../services/goods");

class GoodsController {
  goodsService = new GoodsService();

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

      const createGoods = await this.goodsService.createGoods(
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

  //모든 상품 보기
  findAllGoods = async (req, res, next) => {
    try {
      const findAllGoods = await this.goodsService.findAllGoods();

      res.status(200).json({ data: findAllGoods });
    } catch (err) {
      const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
      console.log(errormessage);
      res.status(400).json({ errormessage });
    }
  };

  //특정 상품 보기
  findGoods = async (req, res, next) => {
    try {
      const { goodsId } = req.params;
      const findGoods = await this.goodsService.findGoods(goodsId);

      res.status(200).json({ data: findGoods });
    } catch (err) {
      if (err.code === -1) {
        res.status(401).send({ errormessage: "없는 상품인디요?" });
      } else {
        const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
        console.log(errormessage);
        res.status(400).json({ errormessage });
      }
    }
  };

  //상품 수정
  updateGoods = async (req, res, next) => {
    try {
      const { goodsId } = req.params;
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
      const updateGoods = await this.goodsService.updateGoods(
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
      if (updateGoods[0] === 0) {
        return res
          .status(401)
          .send({ errormessage: "존재하지 않는 상품입니덩" });
      } else if (updateGoods[0] === 1) {
        return res.status(200).json({ message: "수정 완료!" });
      }
      throw error;
    } catch (err) {
      if (err.code === -1) {
        res.status(401).send({ errormessage: "없는 상품인디요?" });
      } else {
        const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
        console.log(errormessage);
        res.status(400).json({ errormessage });
      }
    }
  };

  //상품 삭제
  deleteGoods = async (req, res, next) => {
    try {
      const { goodsId } = req.params;

      const deleteGoods = await this.goodsService.deleteGoods(goodsId);
      if (deleteGoods[0] === 0) {
        return res
          .status(401)
          .send({ errormessage: "존재하지 않는 상품입니덩" });
      } else if (deleteGoods[0] === 1) {
        return res.status(200).json({ message: "수정 완료!" });
      }
      throw error;
    } catch (err) {
      if (err.code === -1) {
        res.status(401).send({ errormessage: "없는 상품인디요?" });
      } else {
        const errormessage = `${req.method} ${req.originalUrl} : ${err.errormessage}`;
        console.log(errormessage);
        res.status(400).json({ errormessage });
      }
    }
  };
}

module.exports = GoodsController;
