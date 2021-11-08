import React from "react";
import { withRouter, Link } from 'react-router-dom'

class ProductIndexItem extends React.Component {
    constructor(props){
      super(props)
    }

    render(){
        const { product } = this.props
        return (
          <div className="product-container">
              <div></div>
            <Link style={{width: '100%'}} to={`products/${product.id}`}>
              <img className="product-img" src={product.image_url} alt="" />
            </Link>
            <div className="product-content">
              <p className="product-name">{product.product_name}</p>
              <p className="product-description"><span style={{fontWeight: 700}}>Description: </span>{product.description}</p>
              <p><span style={{fontWeight: 700}}>Price: $</span>{product.price}</p>
            </div>
          </div>
        );
    }
}

export default ProductIndexItem;