import { FaSearchDollar } from "react-icons/fa";
import React, { useState } from "react";
import { connect } from "react-redux";
import list from "./menu";
import ProductIndex from "../products/product_index";
// import ProductCard from "../products/product_card";
// const SearchBar = (props) => {
  
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const onChange = (e) => {
//     setValue(e.target.searchTerm);
//   };
//   const onClick = () => {
//     onFilter();
//   };
//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       onFilter();
//     }
//   };

//    const searchHandler = (searchTerm) => {
//      setSearchTerm(searchTerm);
//      if (searchTerm !== "") {
//        const newProductList = products.filter((product) => {
//          return Object.values(product)
//            .join(" ")
//            .toLowerCase()
//            .includes(searchTerm.toLowerCase());
//        });
//        setSearchResults(newProductList);
//      } else {
//        setSearchResults(products);
//      }
//    };
//   // const onFilter = () => {
//   //   console.log(props.products);
//   //   const filterList = props.products.filter((product) =>
//   //     product.product_name.split("").includes(value.split(""))
//   //   );
//   // };

//   return (
//     <div className="searching-container">
//       <input
//         className="searching-input"
//         type="text"
//         placeholder="Search for anything"
//         value={value}
//         onChange={onChange}
//         onKeyDown={handleKeyDown}
//       />
//       <FaSearchDollar
//         style={{ marginRight: 25, width: 30, height: 25 }}
//         onClick={onClick}
//       />
//       <div className="result_list">
//         {renderProducts.length > 0
//           ? renderProducts
//           : "No product available"}
//       </div>
//     </div>
//   );
// };

// // export default SearchBar

// const mSTP = (state) => ({
//   products: Object.values(state.entites.products),
// });

// export default connect(mSTP)(SearchBar);
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isShowDropDown: false,
      searchTerm: "",
      renderProductsList: [],
      renderCategoryList: [],
      // isShowDropDown: false,
    };
    console.log(" searchTerm", this.state.searchTerm);
    this.onChange = this.onChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.productSearchHandler = this.productSearchHandler.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  // handleDropDown(category) {
  //   this.setState({ listChildDropDown: category.child });
  // }

onChange(e){
  debugger
  this.setState({ searchTerm: e.target.value });
};
onClick(e){
  debugger
   this.productSearchHandler(e.target.value);
};
handleKeyDown(e){
  debugger
  if (e.key === "Enter") {
    this.productSearchHandler(e.target.value);
  }
};

// productSearchHandler(searchTermInput){
//   debugger
//   this.setState({ searchTerm: searchTermInput });
//   // console.log("searchTerm", searchTermInput);
//   if (this.state.searchTerm !== "") {
//     debugger
//     // console.log("this.props.products", this.props.products);
//     let filterResult = this.props.products.filter((product) => 
//       // console.log("product", product);
//       (Object.values(product)
//         .join(" ")
//         .toLowerCase()
//         .includes(searchTermInput.toLowerCase())));
//         debugger
        
//    let newState = (this.state.renderProductsList.concat(filterResult));
//     console.log("newState", newState);
//     this.setState({ renderProductsList: newState });
//     console.log("filterResult", filterResult);
//     console.log("this.state.renderProductsList", this.state.renderProductsList);
//   }
// };

categorySearchHandler(searchTermInput){
  debugger
  this.setState({ searchTerm: searchTermInput });
  // console.log("searchTerm", searchTermInput);
  if (this.state.searchTerm !== "") {
    debugger
    // console.log("this.props.products", this.props.products);
    let filterCategoryResult = list.filter((product) => 
      // console.log("product", product);
      (Object.values(product)
        .join(" ")
        .toLowerCase()
        .includes(searchTermInput.toLowerCase())));
        debugger
        
   let newState = (this.state.renderProductsList.concat(filterResult));
    console.log("newState", newState);
    this.setState({ renderProductsList: newState });
    console.log("filterResult", filterResult);
    console.log("this.state.renderProductsList", this.state.renderProductsList);
  }
};


  render() {
    debugger
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
        {/* <div className="result_list">
          {this.state.renderProductsList.length > 0 ? (
            <ProductIndex products={this.state.renderProductsList} />
          ) : (
            "No product available"
          )}
        </div> */}
        {/* <div
        style={{ position: "relative" }}
        onMouseEnter={() => this.setState({ isShowDropDown: true })}
        onMouseLeave={() => this.setState({ isShowDropDown: false })}
      >
        <div className="menu-bar">
           {list.map((category, idx) => (
            <div
              style={{ cursor: "pointer" }}
              key={idx}
              onMouseEnter={() => this.handleDropDown(category)}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div
          className="dropdown-menu"
          style={{ display: this.state.isShowDropDown ? "block" : "none" }}
        >
          <div className="list-menu">
            {this.state.listChildDropDown.map((child, childId) => (
              <Link
                className="category-link"
                style={{ textDecoration: "none" }}
                to={`/products/categories/${child.route}`}
                key={childId}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      </div> */}
      </div>
    );
  }
}

export default SearchBar;


