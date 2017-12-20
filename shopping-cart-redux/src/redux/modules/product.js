// Actions

const DECREASE_INVENTORY = 'shopping-cart-redux/product/DECREASE_INVENTORY';
const LOAD_PRODUCTS = 'shopping-cart-redux/product/LOAD_PRODUCTS';

// Initial State

const initialState = {
  productsDisplayed: {},
  visibleIds: [],
};

// Action Creators

export const loadProducts = () => async (dispatch) => {
  try {
    const productsResponse = await fetch('http://localhost:4000/products');
    const products = await productsResponse.json();

    dispatch({
      type: LOAD_PRODUCTS,
      products,
    });
  } catch (e) {
    console.log(e);
  }
}

export const decreaseInventory = (productId, quantity) => ({
  type: DECREASE_INVENTORY,
  productId,
  quantity,
});

// Reducer

const handleLoadProducts = (state, products) => {
  const visibleIds = products.map(product => product.id);
  const productsDisplayed = products.reduce((acc, product) => {
    acc[product.id] = product;

    return acc;
  }, {});

  return {
    ...state,
    visibleIds,
    productsDisplayed,
  }
}

const hanldeDecreaseInventory = (state, productId, quantity) => {
  const product = getProduct(state, productId);

  return {
    ...state,
    productsDisplayed: {
      ...state.productsDisplayed,
      [product.id]: {
        ...product,
        inventory: product.inventory - quantity,
      },
    },
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCTS:
      return handleLoadProducts(state, action.products);
    case DECREASE_INVENTORY:
      return hanldeDecreaseInventory(state, action.productId, action.quantity);
    default:
      return state;
  }
};

// Utility Functions

const getProduct = (state, id) => state.productsDisplayed[id];
export const getVisibleProducts = state => state.visibleIds.map(id => getProduct(state, id));

export default reducer;