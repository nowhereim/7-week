const { Cart } = require("../models");

class Cartrepository {
  // 장바구니 추가
  createCart = async (userId, productId, quantity, price, productName) => {
    try {
      const createCart = await Cart.create({
        userId,
        productId,
        quantity,
        price,
        productName,
      });
      return createCart;
    } catch (error) {
      throw "레포지토리 파트에서 문제가 발생했습니다.";
    }
  };

  // 장바구니 수정
  updateCart = async (quantity, cartId) => {
    try {
      const updateCart = await Cart.update(
        { quantity },
        {
          where: { cartId: cartId },
        }
      );
      return updateCart;
    } catch (error) {
      throw "레포지토리 파트에서 문제가 발생했습니다.";
    }
  };

  // 장바구니 전체 조회
  getCart = async (userId) => {
    try {
      const getCart = await Cart.findAll({
        where: { userId: userId },
      });
      return getCart;
    } catch (error) {
      throw "레포지토리 파트에서 문제가 발생했습니다.";
    }
  };

  // 장바구니 지정 삭제
  deleteCart = async (cartId) => {
    try {
      const deleteCart = await Cart.destroy({
        where: { cartId: cartId },
      });
      return deleteCart;
    } catch (error) {
      throw "레포지토리 파트에서 문제가 발생했습니다.";
    }
  };

  // 장바구니 전체 삭제
  deleteAllCart = async (userId) => {
    try {
      const deleteAllCart = await Cart.destroy({
        where: { userId: userId },
      });
      return deleteAllCart;
    } catch (error) {
      throw "레포지토리 파트에서 문제가 발생했습니다.";
    }
  };
}

module.exports = Cartrepository;
