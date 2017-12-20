import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css'
import '../App.css';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import ProductList from '../components/ProductList';
import { getVisibleProducts } from '../redux/modules/product';

const Home = ({ products }) => {
  return (
    <div>
      <NavBar />
      <section className="section section-body">
        <SearchBar />
        <ProductList products={products} />
      </section>
    </div>
  );
};

Home.displayName = 'Home';

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.product).slice(0,10),
});

export default connect(mapStateToProps, {})(Home);
