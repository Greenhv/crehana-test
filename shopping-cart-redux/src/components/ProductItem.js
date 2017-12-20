import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ item }) => {
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
          <div className="select">
            <select>
              {[...Array(10).keys()].map(i => <option value={i+1} key={i}>{i+1}</option>)}
            </select>
          </div>
          <button className="button">Add to Cart</button>
        </div>
      </div>
    </li>
  );
};

ProductItem.displayName = 'ProductItem';

ProductItem.propTypes = {
  item: PropTypes.object,
};

export default ProductItem;
