import React, { Component } from 'react';
import GroceryItem from './GroceryItem';
import PropTypes from 'prop-types';

class Groceries extends Component {
  render() {
    return this.props.groceries.map((grocery) => (
        <GroceryItem key={grocery.id} grocery={grocery} togglePurchased={this.props.togglePurchased} 
        delGrocery={this.props.delGrocery} />
    ));
  }
}

// PropTypes
Groceries.propTypes = {
  groceries: PropTypes.array.isRequired
}

export default Groceries;
