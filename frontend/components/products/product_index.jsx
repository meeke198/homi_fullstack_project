import React from "react";
import ProductIndexItem from "./product_index_item";
import Message from "./message";



class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
   
    this.props.fetchProducts();

  }
  render() {
    const { products } = this.props;
    const ProductItems = (products || []).map((product) => {
      return product?.isShown ? <ProductIndexItem key={product.id} product={product} /> : null;
    });
    if (!products.filter((item) => item.isShown).length){
      return (
        <img style={{width: "100vw"}} src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/05/dbe72790-3923-41c4-aa05-44c1e229e7c4-60ac27781f931.jpeg"></img>
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
