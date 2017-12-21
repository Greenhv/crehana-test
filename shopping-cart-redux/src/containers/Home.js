import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css'
import '../App.css';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import ProductList from '../components/ProductList';
import { getVisibleProducts } from '../redux/modules/product';

const Home = ({ products }) => {
  return (
    <div>
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
  products: getVisibleProducts(state.product, state.product.visibleIds),
});

export default connect(mapStateToProps, {})(Home);
