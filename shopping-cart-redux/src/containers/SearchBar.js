import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ className }) => {
  return (
    <div className="field has-addons">
      <div className="control is-expanded">
        <input className="input" type="text"/>
      </div>
      <div className="control">
        <button className="button is-info">
          Search
        </button>
      </div>
    </div>
  );
};

SearchBar.displayName = 'SearchBar';

SearchBar.propTypes = {
  className: PropTypes.string,
};

export default SearchBar;
