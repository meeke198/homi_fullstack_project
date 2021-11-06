import React from "react";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products, currentUser } = this.props;
    const ProductItems = products.map((product) => {
      return <ProductIndexItem key={product.id} product={product} />;
    });
  }
}
