import React from 'react';
import PropTypes from 'prop-types';

const handleRemoveProduct = (productId, quantity, removeProductCart) => () => {
  removeProductCart(productId,quantity);
};

const CheckoutList = ({ productsInCart, productsId, removeProductCart }) => {
  return (
    <div>
      <div className="media">
        <div className="media-left">
          <p className="title is-4">Products</p>
        </div>
        <div className="media-content"></div>
        <div className="media-right is-hidden-mobile">
          <p className="title is-4">SubTotal</p>
        </div>
      </div>
      {
        productsInCart.map((product, i) => (
          <div className="media is-column-mobile" key={i}>
            <div className="media-left is-centered-mobile">
              <img className="image is-128x128" src={product.productImage} alt="Product"/>
            </div>
            <div className="media-content">
              <div className="content has-text-centered-mobile">
                <p className="title is-4">{product.productName}</p>
                <p className="subtitle is-6">Price: ${product.price}</p>
                <p className="is-size-6">Quantity: {productsId[product.id].quantity}</p>
                <p className="is-size-6 is-hidden-tablet">SubTotal: ${product.price*productsId[product.id].quantity}</p>
              </div>
              <div className="links has-text-centered-mobile">
                <a
                  className="button is-text is-size-7 has-no-padding"
                  onClick={handleRemoveProduct(product.id, productsId[product.id].quantity, removeProductCart)}
                >
                  Delete
                </a>
              </div>
            </div>
            <div className="media-right is-hidden-mobile">${product.price*productsId[product.id].quantity}</div>
          </div>
        ))
      }
    </div>
  );
};

CheckoutList.displayName = 'CheckoutList';

CheckoutList.propTypes = {
  productsInCart: PropTypes.arrayOf(PropTypes.object),
  productsId: PropTypes.object,
  removeProductCart: PropTypes.func,
};

export default CheckoutList;
