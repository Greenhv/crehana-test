import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cart from '../shopping_cart.png';
import { getQuantityInCart } from '../redux/modules/cart';

const NavBar = ({ productsInCart }) => {
  return (
    <nav className="navbar is-primary" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">STC</Link>
        <Link className="navbar-item is-hidden-desktop navbar-mobile-right" to="/check-out">
          <div className="shopping-cart-container">
            <div className="shopping-cart-counter">{ productsInCart }</div>
            <img className="image is-32x32" src={cart} alt="shopping cart"/>
          </div>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/check-out">
            <div className="shopping-cart-container">
              <div className="shopping-cart-counter">{ productsInCart }</div>
              <img className="image is-32x32" src={cart} alt="shopping cart"/>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

NavBar.displayName = 'NavBar';

NavBar.propTypes = {
  productsInCart: PropTypes.number,
};

const mapStateToProps = state => ({
  productsInCart: getQuantityInCart(state.cart),
});

export default connect(mapStateToProps, {})(NavBar);
