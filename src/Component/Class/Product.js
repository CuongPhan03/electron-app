import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { name, price } = this.props;

    return (
      <div className="product">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
      </div>
    );
  }
}

export default Product;
