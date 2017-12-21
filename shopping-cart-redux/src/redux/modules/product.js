// Actions

const INCREASE_INVENTORY = 'shopping-cart-redux/product/INCREASE_INVENTORY';
const DECREASE_INVENTORY = 'shopping-cart-redux/product/DECREASE_INVENTORY';
const SEARCH_PRODUCTS = 'shopping-cart-redux/product/SEARCH_PRODUCTS';
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

export const increaseInventory = (productId, quantity) => ({
  type: INCREASE_INVENTORY,
  productId,
  quantity,
})

export const searchProducts = (productName) => ({
  type: SEARCH_PRODUCTS,
  productName,
});

// Reducer

const handleLoadProducts = (state, products) => {
  const visibleIds = products.map(product => product.id).slice(0,10);
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

const handleIncreaseInventory = (state, productId, quantity) => {
  const product = getProduct(state, productId);
  
  console.log(product);

  return {
    ...state,
    productsDisplayed: {
      ...state.productsDisplayed,
      [product.id]: {
        ...product,
        inventory: product.inventory + quantity,
      },
    },
  };
};

const searchByProductName = (state, productName) => {
  let visibleIds = [];

  Object.keys(state.productsDisplayed).forEach(productKey => {
    if (state.productsDisplayed[productKey].productName.toLowerCase().indexOf(productName.toLowerCase()) !== -1)
      visibleIds.push(productKey);
  });

  return visibleIds;
};

const handleSearchProducts = (state, productName) => {
  const visibleIds = productName === '' ? [...Array(10).keys()] : searchByProductName(state, productName);

  return {
    ...state,
    visibleIds,
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCTS:
      return handleLoadProducts(state, action.products);
    case INCREASE_INVENTORY:
      return handleIncreaseInventory(state, action.productId, action.quantity);
    case DECREASE_INVENTORY:
      return hanldeDecreaseInventory(state, action.productId, action.quantity);
    case SEARCH_PRODUCTS:
      return handleSearchProducts(state, action.productName);
    default:
      return state;
  }
};

// Utility Functions

const getProduct = (state, id) => state.productsDisplayed[id];
export const getVisibleProducts = (state, idList) => idList.map(id => getProduct(state, id));

export default reducer;