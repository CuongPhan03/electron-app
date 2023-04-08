import { Component } from 'react';

class Home extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <h2>Home Page</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
