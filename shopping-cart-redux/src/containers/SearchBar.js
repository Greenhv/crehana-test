import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchProducts } from '../redux/modules/product';

class SearchBar extends PureComponent {
  static propTypes = {
    searchProducts: PropTypes.func,
  };

  state = {
    searchFieldValue: '',
  };

  onChangeSearchField = (e) => {
    this.setState({ searchFieldValue: e.target.value })
  };

  onSearchField = () => {
    const {
      searchProducts
    } = this.props;

    searchProducts(this.state.searchFieldValue);
  }

  render() {
    return (
      <div className="field has-addons">
        <div className="control is-expanded">
          <input className="input" type="text" onChange={(e) => this.onChangeSearchField(e)} />
        </div>
        <div className="control">
          <button className="button is-info" onClick={this.onSearchField}>Search</button>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), { searchProducts })(SearchBar);




