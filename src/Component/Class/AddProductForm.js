import React, { Component } from 'react';

class AddProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price } = this.state;
    this.props.onAddProduct({ name, price });
    this.setState({ name: '', price: '' });
  };

  render() {
    const { name, price } = this.state;

    return (
      <form className="add-product-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Product name" value={name} onChange={this.handleNameChange} />
        <input type="number" placeholder="Price" value={price} onChange={this.handlePriceChange} />
        <button type="submit">Add Product</button>
      </form>
    );
  }
}

export default AddProductForm;
