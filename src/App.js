import React, { Component } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import DefaultLayout from './Component/DefaultLayout';
import Home from './Pages/Home';
import Status from './Pages/Status';
import Add from './Pages/Add';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  handleDeleteProduct = (product) => {
    const { products } = this.state;
    const updatedProducts = products.filter((p) => p !== product);
    this.setState({ products: updatedProducts });
  };

  hanldeAddProduct = (newProduct) => {
    const { products } = this.state;
    this.setState({
      products: [...products, newProduct],
    });
  };

  render() {
    const { products } = this.state;
    return (
      <Router>
        <div className="app">
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<Home products={products} />} />
              <Route
                path="/Add"
                element={
                  <Add
                    products={products}
                    onAddProduct={this.hanldeAddProduct}
                    onDeleteProduct={this.handleDeleteProduct}
                  />
                }
              />
              <Route path="/Status" element={<Status products={products} />} />
            </Routes>
          </DefaultLayout>
        </div>
      </Router>
    );
  }
}

export default App;
