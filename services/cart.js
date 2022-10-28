const cartrepository = require("../repositories/cart");

class Cartservice {
  // 새 인스턴스 생성
  cartrepository = new cartrepository();

  // 장바구니 추가
  createCart = async (userId, productId, quantity, price, productName) => {
    try {
      const createCart = await this.cartrepository.createCart(
        userId,
        productId,
        quantity,
        price,
        productName
      );
      return createCart;
    } catch (error) {
      throw "서비스 파트에서 문제가 발생했습니다.";
    }
  };

  // 장바구니 수정
  updateCart = async (quantity, cartId) => {
    try {
      const updateCart = await this.cartrepository.updateCart(quantity, cartId);
      return updateCart;
    } catch (error) {
      throw "서비스 파트에서 문제가 발생했습니다.";
    }
  };

  // 장바구니 전체 조회
  getCart = async (userId) => {
    try {
      const getCart = await this.cartrepository.getCart(userId);
      return getCart;
    } catch (error) {
      throw "서비스 파트에서 문제가 발생했습니다.";
    }
  };

  // 장바구니 지정 삭제
  deleteCart = async (cartId) => {
    try {
      const deleteCart = await this.cartrepository.deleteCart(cartId);
      return deleteCart;
    } catch (error) {
      throw "서비스 파트에서 문제가 발생했습니다.";
    }
  };

  // 장바구니 전체 삭제
  deleteAllCart = async (userId) => {
    try {
      const deleteAllCart = await this.cartrepository.deleteAllCart(userId);
      return deleteAllCart;
    } catch (error) {
      throw "서비스 파트에서 문제가 발생했습니다.";
    }
  };
}

module.exports = Cartservice;
