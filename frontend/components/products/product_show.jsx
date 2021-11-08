import React from "react";
import { Link } from "react-router-dom";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    console.log("productshow props", props)
  }
componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId);
}
  render() {
    const { product } = this.props;
    return (
      <div className="product-container">
            <img className="product-img" src={product.image_url} alt="" />
        <div className="product-content">
          <p className="product-name">{product.product_name}</p>
          <p className="product-description">
            <span style={{ fontWeight: 700 }}>Description: </span>
            {product.description}
          </p>
          <p>
            <span style={{ fontWeight: 700 }}>Price: $</span>
            {product.price}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductShow;
