const { Cart } = require("../models");

class Cartrepository {
  // 장바구니 추가
  createCart = async (userId, productId, quantity, price, productName) => {
    const createCart = await Cart.create({
      userId,
      productId,
      quantity,
      price,
      productName,
    });
    return createCart;
  };

  // 장바구니 수정
  updateCart = async (quantity, cartId) => {
    const updateCart = await Cart.update(
      { quantity },
      {
        where: { cartId: cartId },
      }
    );
    return updateCart;
  };

  // 장바구니 전체 조회
  getCart = async (userId) => {
    const getCart = await Cart.findAll({
      where: { userId: userId },
    });
    return getCart;
  };

  // 장바구니 지정 삭제
  deleteCart = async (cartId) => {
    const deleteCart = await Cart.destroy({
      where: { cartId: cartId },
    });
    return deleteCart;
  };

  // 장바구니 전체 삭제
  deleteAllCart = async (userId) => {
    const deleteAllCart = await Cart.destroy({
      where: { userId: userId },
    });
    return deleteAllCart;
  };
}

module.exports = Cartrepository;
