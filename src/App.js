import React, { Component } from 'react';

import './Component/DefaultLayout/DefaultLayout.module.css';
import DefaultLayout from './Component/DefaultLayout';

import ProductList from './Component/Class/ProductList';
import AddProductForm from './Component/Class/AddProductForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  handleAddProduct = (product) => {
    this.setState({ products: [...this.state.products, product] });
  };

  render() {
    const { products } = this.state;

    return (
      <DefaultLayout>
        <div className="app">
          <AddProductForm onAddProduct={this.handleAddProduct} />
          <ProductList products={products} />
        </div>
      </DefaultLayout>
    );
  }
}

export default App;
