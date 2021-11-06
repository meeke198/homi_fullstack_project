import React from "react";
import { withRouter, Link } from 'react-router-dom'

class ProductIndexItem extends React.Component {
    constructor(props){
      super(props)
    }

    render(){
        const { product } = this.props
        return (
          <div>
            this is product item
            <Link to={`products/${product.id}`}>
              <img src={product.imageUrl} alt="" />
            </Link>
            <div>
                <p>{product.price}</p>
            </div>
          </div>
        );
    }
}

export default ProductIndexItem;