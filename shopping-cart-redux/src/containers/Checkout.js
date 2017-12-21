import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVisibleProducts } from '../redux/modules/product';
import { removeProductCart, checkOutCart } from '../redux/modules/cart';
import CheckoutList from '../components/CheckoutList';

const handleCheckOut = (history, checkOutCart) => () => {
  history.push('/');
  checkOutCart();
}

const Checkout = ({ history, productsInCart, productsId, removeProductCart, checkOutCart }) => {
  return (
    <div>
      <section className="section section-body">
        <div className="box">
          { productsInCart.length < 1
            ? <div className="media">There aren't any products in shopping cart</div>
            : (
              <div>
                <CheckoutList productsInCart={productsInCart} productsId={productsId} removeProductCart={removeProductCart} />
                <div className="checkout-total-container">
                  <div className="checkout-total">
                    <span className="has-text-weight-bold">Total: </span>
                    <span>${productsInCart.reduce((acc, product) => acc + product.price*productsId[product.id].quantity , 0)}</span>
                  </div>
                </div>
                <div className="buttons has-addons is-right">
                  <button className="button is-success" onClick={handleCheckOut(history, checkOutCart)}>Checkout</button>
                </div>
              </div>
            )
          }
        </div>
      </section>
    </div>
  );
};

Checkout.displayName = 'Checkout';

Checkout.propTypes = {
  productsInCart: PropTypes.arrayOf(PropTypes.object),
  productsId: PropTypes.object,
  removeProductCart: PropTypes.func,
  checkOutCart: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  productsInCart: getVisibleProducts(state.product, Object.keys(state.cart.productsId)),
  productsId: state.cart.productsId,
});

export default connect(mapStateToProps, { removeProductCart, checkOutCart })(Checkout);
