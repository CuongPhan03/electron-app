import { Component } from 'react';

class Add extends Component {
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
  handleSubmit = () => {
    const { name, price } = this.state;
    this.props.onAddProduct({ name, price });
    this.setState({ name: '', price: '' });
  };
  handleDeleteProduct = (product) => {
    this.props.onDeleteProduct(product);
  };
  render() {
    const { products } = this.props;
    const { name, price } = this.state;
    return (
      <div>
        <h2>Add Page</h2>
        <input type="text" value={name} onChange={this.handleNameChange} placeholder="Enter name..." />
        <input type="number" value={price} onChange={this.handlePriceChange} placeholder="Enter price..." />
        <button onClick={this.handleSubmit}>Add</button>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              Name: {product.name} - Price: {product.price}vnd
              <button onClick={() => this.handleDeleteProduct(product)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Add;
