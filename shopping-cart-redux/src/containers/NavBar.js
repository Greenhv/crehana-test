import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cart from '../shopping_cart.png';

const NavBar = ({ className }) => {
  return (
    <nav className="navbar is-primary" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          STC
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/check-out">
            <div>
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
  className: PropTypes.string,
};

export default NavBar;
