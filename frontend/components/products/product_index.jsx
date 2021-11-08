import React from "react";
import ProductIndexItem from "./product_index_item";


class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchProducts();
  }
  render() {
    const { products, currentUser } = this.props;
    console.log("products ne",products)
    const ProductItems = products.map((product) => {
      return <ProductIndexItem key={product.id} product={product} />;
    });
    return (
        <div className="product-index">{ProductItems}</div>
    )
  }
}

export default ProductIndex;
