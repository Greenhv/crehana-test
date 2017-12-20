import React from 'react';
import PropTypes from 'prop-types';

const List = ({ ListItemComponent, items }) => {
  return (
    <ul className="columns is-multiline is-centered">
      {items.map((item, i) => <ListItemComponent item={item} key={i} />)}
    </ul>
  );
};

List.displayName = 'List';

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  ListItemComponent: PropTypes.func,
};

export default List;
