import { decreaseInventory } from './product';
// Actions

const ADD_PRODUCT_TO_CART = 'shopping-cart-redux/cart/ADD_PRODUCT_TO_CART';
const REMOVE_PRODUCT = 'shopping-cart-redux/cart/REMOVE_PRODUCT';
const CHECKOUT_PRODUCTS = 'shopping-cart-redux/cart/CHECKOUT_PRODUCTS';

// Initial State

const initialState = {
  productsId: [],
  isCheckout: false,
};

// Action Creators

const addProduct = (productId) => ({
  type: ADD_PRODUCT_TO_CART,
  productId,
});

export const addToCart = (productId, quantity) => (dispatch, getState) => {
  if (getState().product.productsDisplayed[productId].inventory > 0) {
    dispatch(addProduct(productId));
    dispatch(decreaseInventory(productId, quantity));
  }
}

// Reducer

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      const productsId = [...state.productsId, action.productId];

      return {
        ...state,
        productsId,
      };
    case REMOVE_PRODUCT:
      return state;
    case CHECKOUT_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default reducer;