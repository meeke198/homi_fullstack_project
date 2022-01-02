import React from "react";
import ProductIndexItem from "./product_index_item";
import Message from "./message";


class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.products.length === 0) {
      this.props.fetchProducts();
    }
  }
  render() {
    const { products } = this.props;
    const ProductItems = (products || []).map((product) => {
      return <ProductIndexItem key={product.id} product={product} />;
    });
    return (
      <div>
        <Message />
        <div className="product-index">{ProductItems}</div>
      </div>
    );
  }
}

export default ProductIndex;
