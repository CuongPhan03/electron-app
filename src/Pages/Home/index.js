import { Component } from 'react';

import AddProductForm from '../../Component/Class/AddProductForm';
import ProductList from '../../Component/Class/ProductList';

class Home extends Component {
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
      <div>
        <AddProductForm onAddProduct={this.handleAddProduct} />
        <ProductList products={products} />
      </div>
    );
  }
}

export default Home;
