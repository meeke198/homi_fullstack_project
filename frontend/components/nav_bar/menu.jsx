import React from "react";


const list = [
  { 
    name: "Clothing & Shoe",
  },
  {
    name: "Home & Living",
  },
  {
    name: "Jewelry & Accessories",
  },
  {
    name: "Art & Collectibles",
  },
  {
    name: "Craft Supplies",
  },
];

// const dropDown = {
//     <div>

//     </div>
// }

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowDropDown: false,
    };
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleDropDown(){
    // this.setState({isShowDropDown: true})
  }

  handleMouseLeave(){
    // this.setState({isShowDropDown: false})
  }

  render() {
    return (
      <div
        onMouseEnter={() => this.setState({ isShowDropDown: true })}
        onMouseLeave={() => this.setState({ isShowDropDown: false })}
      >
        <div className="menu-bar">
          {list.map((category, idx) => (
            <div
              key={idx}
              onMouseEnter={this.handleDropDown}
              onMouseLeave={this.handleMouseLeave}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div style={{ display: this.state.isShowDropDown ? "block" : "none" }}>
          <ol>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Menu;