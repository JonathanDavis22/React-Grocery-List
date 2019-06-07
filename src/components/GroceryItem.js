import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class GroceryItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.grocery.purchased ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, name } = this.props.grocery;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.togglePurchased.bind(this, id)}/> {' '}
                { name }
                <button onClick={this.props.delGrocery.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
GroceryItem.propTypes = {
    grocery: PropTypes.object.isRequired
  }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default GroceryItem;
