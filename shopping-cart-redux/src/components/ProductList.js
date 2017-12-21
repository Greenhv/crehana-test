import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../containers/ProductItem';

const ProductList = ({ products }) => {
  return (
    <ul className="columns is-multiline is-centered">
      {products.map((item, i) => <ProductItem item={item} key={i} />)}
    </ul>
  );
};

ProductList.displayName = 'ProductList';

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default ProductList;
