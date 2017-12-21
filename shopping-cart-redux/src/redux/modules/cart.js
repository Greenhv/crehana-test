import { decreaseInventory, increaseInventory } from './product';
// Actions

const ADD_PRODUCT_TO_CART = 'shopping-cart-redux/cart/ADD_PRODUCT_TO_CART';
const REMOVE_PRODUCT = 'shopping-cart-redux/cart/REMOVE_PRODUCT';
const CHECKOUT_PRODUCTS = 'shopping-cart-redux/cart/CHECKOUT_PRODUCTS';

// Initial State

const initialState = {
  productsId: {},
};

// Action Creators

const addProduct = productId => ({
  type: ADD_PRODUCT_TO_CART,
  productId,
});

export const addToCart = (productId, quantity) => (dispatch, getState) => {
  if (getState().product.productsDisplayed[productId].inventory > 0) {
    dispatch(addProduct(productId));
    dispatch(decreaseInventory(productId, quantity));
  }
}

const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  productId
})

export const removeProductCart = (productId, quantity) => (dispatch) => {
  dispatch(removeProduct(productId));
  dispatch(increaseInventory(productId, quantity));
}

export const checkOutCart = () => (dispatch, getState) => {
  try {
    const state = getState();
    const myHeaders = new Headers({
      "Content-Type": "application/json",
    });
    const initOptions = {
      method: 'PUT',
      headers: myHeaders,
    };

    Object.keys(state.cart.productsId).forEach(key => {
      initOptions['body'] = JSON.stringify(state.product.productsDisplayed[key]);
      fetch(`http://localhost:4000/products/${key}`, initOptions);
    });

    dispatch({
      type: CHECKOUT_PRODUCTS,
    });
  } catch (e) {
    console.log(e);
  }
}

// Reducer

const handleAddProductToCart = (state, productId) => {
  const product = state.productsId[productId];
  let quantity = 1;

  if (product) {
    quantity = product.quantity + 1;
  }

  return {
    ...state,
    productsId: {
      ...state.productsId,
      [productId]: {
        quantity,
      },
    },
  };
};

const handleRemoveProduct = (state, productId) => {
  const newProductsId = { ...state.productsId };

  delete newProductsId[productId];

  return {
    ...state,
    productsId: newProductsId,
  };
};

const handleCheckOut = (state) => {
  return {
    ...state,
    productsId: {},
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      return handleAddProductToCart(state,action.productId);
    case REMOVE_PRODUCT:
      return handleRemoveProduct(state, action.productId);
    case CHECKOUT_PRODUCTS:
      return handleCheckOut(state);
    default:
      return state;
  }
};

export const getQuantityInCart = state => {
  let acc = 0;

  Object.keys(state.productsId).forEach((key) => {
    acc = acc + state.productsId[key].quantity;
  });

  return acc;
};

export const getProductsInCart = state => {
  Object.keys(state.productsId)
}

export default reducer;