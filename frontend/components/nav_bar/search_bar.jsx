import { FaSearchDollar } from "react-icons/fa";
import React, { useState } from "react";
import { connect } from "react-redux";
import list from "./menu";
import ProductShow from "../products/product_show";
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
      // isShowDropDown: false,
    };
    console.log(" searchTerm", this.state.searchTerm);
    this.onChange = this.onChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
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
   this.searchHandler(e.target.value);
};
handleKeyDown(e){
  debugger
  if (e.key === "Enter") {
    this.searchHandler(e.target.value);
  }
};

searchHandler(searchTermInput){
  debugger
  this.setState({ searchTerm: searchTermInput });
  // console.log("searchTerm", searchTermInput);
  if (this.state.searchTerm !== "") {
    debugger
    // console.log("this.props.products", this.props.products);
    const filterResult = this.props.products.filter((product) => 
      // console.log("product", product);
      (Object.values(product)
        .join(" ")
        .toLowerCase()
        .includes(searchTermInput.toLowerCase())));
    this.setState({ renderProductsList: filterResult });
    console.log("filterResult", filterResult);
    console.log("this.state.renderProductsList", this.state.renderProductsList);
  } else {
    this.setState({ renderProductsList: null});
  }
};



  render() {
    const renderProducts = (this.state.renderProductsList || []).map(
      (product, idx) => {
        return (
          <ProductShow
            product={product}
            key={idx}
          />
        );
      }
    );
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
         <div className="result_list">
         {renderProducts.length > 0
          ? renderProducts
          : "No product available"}
      </div>
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


