import React from "react";
import { Link } from "react-router-dom";
import ProductIndexItem from "./product_index_item";
import Message from "./message";
import NotFound from "../not_found/not_found"


class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

 async componentDidMount() {
   this.setState ({ isLoading: true} ) 
   await this.props.fetchProducts("");
    this.setState({ isLoading: false}); 
  }

  render() {
    const { products } = this.props;
    const ProductItems = (products || []).map((product, i) => {
      return <ProductIndexItem key={`${product.id}-${i}`} product={product} />;
    });
    if(this.state.isLoading){
      return (
        <div>
          <div className="progress">
            <div className="color"></div>
          </div>
          <div style={{fontWeight: 900, fontSize: 20, textAlign: "center"}}>Loading...</div>
        </div>
      );

    }
    if (!products.length){
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
          <p
            className="enter btn"
            onClick={() => this.props.fetchProducts("")}
            style={{ fontWeight: "bolder" }}
          >
            Go back to homepage
          </p>
        </div>
      );
     }
    return (
      <div>
        <Message />
        {products.length ? <div className="product-index">{ProductItems}</div> : <div></div>}
        
      </div>
    );
  }
}

export default ProductIndex;
