const cartrepository = require("../repositories/cart");

class Cartservice {
  // 새 인스턴스 생성
  cartrepository = new cartrepository();

  // 장바구니 추가
  createCart = async (userId, productId, quantity, price, productName) => {
    const createCart = await this.cartrepository.createCart(
      userId,
      productId,
      quantity,
      price,
      productName
    );
    return createCart;
  };

  // 장바구니 수정
  updateCart = async (quantity, cartId) => {
    const updateCart = await this.cartrepository.updateCart(quantity, cartId);
    return updateCart;
  };

  // 장바구니 전체 조회
  getCart = async (userId) => {
    const getCart = await this.cartrepository.getCart(userId);
    return getCart;
  };

  // 장바구니 지정 삭제
  deleteCart = async (cartId) => {
    const deleteCart = await this.cartrepository.deleteCart(cartId);
    return deleteCart;
  };

  // 장바구니 전체 삭제
  deleteAllCart = async (userId) => {
    const deleteAllCart = await this.cartrepository.deleteAllCart(userId);
    return deleteAllCart;
  };
}

module.exports = Cartservice;
