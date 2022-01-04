import { FaSearchDollar } from "react-icons/fa";
import React, { useState } from "react";
import { connect } from "react-redux";
import list from "./menu";
import ProductIndex from "../products/product_index";
import { updateAllProducts } from "../../actions/product_actions";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      renderProductsList: [],
      renderCategoryList: [],
    };
    this.onChange = this.onChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.productSearchHandler = this.productSearchHandler.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    // debugger
    this.setState({ searchTerm: e.target.value });
  }
  onClick(e) {
    // debugger
    this.productSearchHandler(this.state.searchTerm);
  }
  handleKeyDown(e) {
    // debugger
    if (e.key === "Enter") {
      this.productSearchHandler(e.target.value);
    }
  }

  productSearchHandler(searchTermInput) {
    this.setState({ searchTerm: searchTermInput });
    // console.log("searchTerm", searchTermInput);
      let filterResult = this.props.products.map((product) =>
      {
      if (Object.values(product)
      .join(" ")
      .toLowerCase()
      .includes(searchTermInput.toLowerCase())){
        product.isShown = true
      } else {
        product.isShown = false
      }
      return product
      })
       this.props.updateAllProducts(filterResult);
    }

  render() {
    return (
      <div className="searching-container">
        <input
          className="searching-input"
          type="text"
          placeholder="Search for anything"
          value={this.state.searchTerm}
          onChange={this.onChange}
          onKeyDown={this.handleKeyDown}
        />
        <FaSearchDollar
          style={{ marginRight: 25, width: 30, height: 25 }}
          onClick={this.onClick}
        />
     
      </div>
    );
  }
}

const mSTP = (state) => ({
  products: state.entities.products,
});
const mDTP = (dispatch) => ({
  updateAllProducts: (products) => dispatch(updateAllProducts(products)),
});

export default connect(mSTP, mDTP)(SearchBar);
