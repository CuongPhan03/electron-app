import React from 'react';

class ProductManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      newProduct: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newProduct: event.target.value });
  };

  handleAddProduct = () => {
    const { newProduct, products } = this.state;
    if (newProduct) {
      this.setState({
        products: [...products, newProduct],
        newProduct: '',
      });
    }
  };

  handleDeleteProduct = (product) => {
    const { products } = this.state;
    const updatedProducts = products.filter((p) => p !== product);
    this.setState({ products: updatedProducts });
  };

  render() {
    const { products, newProduct } = this.state;
    return (
      <div>
        <h1>Product Management</h1>
        <ul>
          {products.map((product) => (
            <li key={product}>
              {product}
              <button onClick={() => this.handleDeleteProduct(product)}>Delete</button>
            </li>
          ))}
        </ul>
        <input type="text" value={newProduct} onChange={this.handleInputChange} />
        <button onClick={this.handleAddProduct}>Add Product</button>
      </div>
    );
  }
}

export default ProductManagement;
