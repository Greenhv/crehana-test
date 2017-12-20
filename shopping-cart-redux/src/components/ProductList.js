import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import List from './List';

const ProductList = ({ products }) => {
  return (
    <List items={products} ListItemComponent={ProductItem} />
  );
};

ProductList.displayName = 'ProductList';

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default ProductList;
