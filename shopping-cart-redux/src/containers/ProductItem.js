import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../redux/modules/cart';

const onClickAddToCart = (addToCart, productId) => () => {
  addToCart(productId, 1);
}

const ProductItem = ({ item, addToCart }) => {
  return (
    <li className="column is-one-fifth">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={item.productImage} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content has-text-centered">
          <div className="media">
            <div className="media-content">
               <p className="title is-6 has-text-centered">{item.productName}</p>
               <p className="subtitle is-7 has-text-centered">Price: ${item.price}</p>
            </div>
          </div>
          {
            item.inventory > 0 
            ? (<button className="button" onClick={onClickAddToCart(addToCart, item.id)}>Add to Cart</button>)
            : (<button className="button" disabled>No Stock</button>)
          }
        </div>
      </div>
    </li>
  );
};

ProductItem.displayName = 'ProductItem';

ProductItem.propTypes = {
  item: PropTypes.object,
};

export default connect(() => ({}), { addToCart })(ProductItem);
