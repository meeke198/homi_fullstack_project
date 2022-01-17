import React from "react";
import { Link } from "react-router-dom";
import ProductIndexItem from "./product_index_item";
import Message from "./message";



class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  goToHome(){

  }
  render() {
    const { products } = this.props;
    const ProductItems = (products || []).map((product, i) => {
      return product?.isShown ? <ProductIndexItem key={`${product.id}-${i}`} product={product} /> : null;
    });
    if (!products.filter((item) => item.isShown).length){
      return (
        <div className="not-found">
          {/* <img
            style={{ width: "50%"}}
            src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/05/dbe72790-3923-41c4-aa05-44c1e229e7c4-60ac27781f931.jpeg"
          ></img> */}
          <img
            style={{ width: "10%", heigh: "10%" }}
            src="https://img.icons8.com/dotty/80/000000/nothing-found.png"
          />
          <h1 className="not-found-message">Item not found</h1>
          <p className="enter btn">
            Press <span style={{ fontWeight: "bolder" }}>Enter</span> to go back
            to homepage
          </p>
        </div>
      );
    }
    return (
      <div>
        <Message />
        {products.length ? <div className="product-index">{ProductItems}</div> : "Product not found!"}
        
      </div>
    );
  }
}

export default ProductIndex;
