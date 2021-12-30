import { FaSearchDollar } from "react-icons/fa";
import React, { useState } from "react";
import { connect } from "react-redux";
const SearchBar = (props) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    onFilter();
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onFilter();
    }
  };

  const onFilter = () => {
    console.log(props.products);
    props.products.filter((product) =>
      product.product_name.split("").includes(value.split(""))
    );
  };
  return (
    <div className="searching-container">
      <input
        className="searching-input"
        type="text"
        placeholder="Search for anything"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <FaSearchDollar
        style={{ marginRight: 25, width: 30, height: 25 }}
        onClick={onClick}
      />
    </div>
  );
};

// export default SearchBar

const mSTP = (state) => ({
  products: Object.values(state.entites.products),
});

export default connect(mSTP)(SearchBar);
