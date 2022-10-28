const { response } = require("express");
const Cart = require("../repositories/cart");

class Cartcontroller {
  // 인스턴스 생성
  cartservice = new Cart();

  // 장바구니 추가
  createCart = async (req, res, next) => {
    try {
      const { userId, productId, quantity, price, productName } = req.body;
      const createcart = await this.cartservice.createCart(
        userId,
        productId,
        quantity,
        price,
        productName
      );
      // 성공 : 선언한 값을 보내기, 실패 : 에러 메세지 보내기
      res.status(200).json({ createcart });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  };

  // 장바구니 수정
  updateCart = async (req, res, next) => {
    const quantity = req.body.quantity;
    const cartId = req.body.cartId;
    const updatecart = await this.cartservice.updateCart(quantity, cartId);
    // 성공 : 선언한 값을 보내기, 실패 : 에러 메세지 보내기
    res.status(200).json({ updatecart });
  };

  // 장바구니 전체 조회
  getCart = async (req, res, next) => {
    const userId = req.body.userId;
    const readallcart = await this.cartservice.getCart(userId);
    // 성공 : 선언한 값을 보내기, 실패 : 에러 메세지 보내기
    res.status(200).json({ readallcart });
  };

  // 장바구니 지정 삭제
  deleteCart = async (req, res, next) => {
    const cartId = req.body.cartId;
    const deletecart = await this.cartservice.deleteCart(cartId);
    // 성공 : 선언한 값을 보내기, 실패 : 에러 메세지 보내기
    res.status(200).json({ deletecart });
  };

  // 장바구니 전체 삭제
  deleteAllCart = async (req, res, next) => {
    const userId = req.body.userId;
    const deleteallcart = await this.cartservice.deleteAllCart(userId);
    // 성공 : 선언한 값을 보내기, 실패 : 에러 메세지 보내기
    res.status(200).json({ deleteallcart });
  };
}

module.exports = Cartcontroller;
