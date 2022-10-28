const { response } = require("express");
const Cart = require("../repositories/cart");

class Cartcontroller {
  // 인스턴스 생성
  cartservice = new Cart();

  // 장바구니 추가
  createCart = async (req, res, next) => {
    try {
      const { userId, productId, quantity, price, productName } = req.body;
      if (
        userId === undefined ||
        productId === undefined ||
        quantity === undefined ||
        price === undefined ||
        productName === undefined
      ) {
        throw "리퀘스트 값에 문제가 발생하였습니다.";
      }
      const createcart = await this.cartservice.createCart(
        userId,
        productId,
        quantity,
        price,
        productName
      );
      // 성공 : 선언한 값을 보내기, 실패 : 에러 메세지 보내기
      res.status(200).json({ data: createcart });
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };

  // 장바구니 수정
  updateCart = async (req, res, next) => {
    try {
      const quantity = req.body.quantity;
      const cartId = req.body.cartId;
      if (quantity === undefined || cartId === undefined) {
        throw "리퀘스트 값에 문제가 발생하였습니다.";
      }
      const updatecart = await this.cartservice.updateCart(quantity, cartId);
      // 성공 : 선언한 값을 보내기, 실패 : 에러 메세지 보내기
      res.status(200).json({ data: updatecart });
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };

  // 장바구니 전체 조회
  getCart = async (req, res, next) => {
    try {
      const userId = req.body.userId;
      if (userId === undefined) {
        throw "리퀘스트 값에 문제가 발생하였습니다.";
      }
      const readallcart = await this.cartservice.getCart(userId);
      console.log(readallcart);
      // 성공 : 선언한 값을 보내기, 실패 : 에러 메세지 보내기
      res.status(200).json({ data: readallcart });
    } catch (err) {
      console.log(err);
      res.status(401).json({ errormessage: err });
    }
  };

  // 장바구니 지정 삭제
  deleteCart = async (req, res, next) => {
    try {
      const cartId = req.body.cartId;
      if (cartId === undefined) {
        throw "리퀘스트 값에 문제가 발생하였습니다.";
      }
      const deletecart = await this.cartservice.deleteCart(cartId);
      // 성공 : 선언한 값을 보내기, 실패 : 에러 메세지 보내기
      res.status(200).json({ data: deletecart });
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };

  // 장바구니 전체 삭제
  deleteAllCart = async (req, res, next) => {
    try {
      const userId = req.body.userId;
      if (userId === undefined) {
        throw "리퀘스트 값에 문제가 발생하였습니다.";
      }
      const deleteallcart = await this.cartservice.deleteAllCart(userId);
      // 성공 : 선언한 값을 보내기, 실패 : 에러 메세지 보내기
      res.status(200).json({ data: deleteallcart });
    } catch (err) {
      res.status(401).json({ errormessage: err });
    }
  };
}

module.exports = Cartcontroller;
