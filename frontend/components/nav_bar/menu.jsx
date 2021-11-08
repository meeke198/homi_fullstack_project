import React from "react";


const list = [
  {
    name: "Clothing & Shoe",
    child: [
      { name: "dresses" },
      { name: "sweater" },
      { name: "pants" },
      { name: "coat" },
      { name: "skirts" },
      { name: "bedding" },
      { name: "bathroom" },
      { name: "garden" },
      { name: "bedding" },
      { name: "livingroom" },
    ],
  },
  {
    name: "Home & Living",
    child: [
      { name: "bedding" },
      { name: "bathroom" },
      { name: "garden" },
      { name: "bedding" },
      { name: "livingroom" },
      { name: "bedding" },
      { name: "bathroom" },
      { name: "garden" },
      { name: "bedding" },
      { name: "livingroom" },
    ],
  },

  {
    name: "Jewelry & Accessories",
    child: [
      { name: "rings" },
      { name: "bracelet" },
      { name: "watches" },
      { name: "hihi" },
      { name: "hehheehe" },
    ],
  },
  {
    name: "Art & Collectibles",
    child: [
      { name: "bedding" },
      { name: "bathroom" },
      { name: "garden" },
      { name: "bedding" },
      { name: "livingroom" },
      { name: "bedding" },
      { name: "bathroom" },
      { name: "garden" },
      { name: "bedding" },
      { name: "livingroom" },
    ],
  },
  {
    name: "Craft Supplies",
    child: [
      { name: "afjfsaf" },
      { name: "afsdja" },
      { name: "garden" },
      { name: "bedding" },
      { name: "livingroom" },
      { name: "bedding" },
      { name: "bathroom" },
      { name: "garden" },
      { name: "bedding" },
      { name: "livingroom" },
    ],
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
      listChildDropDown: [],
    };
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleDropDown(category){
    this.setState({listChildDropDown: category.child});
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
            <div style = {{cursor: 'pointer'}}
              key={idx}
              onMouseEnter={() => this.handleDropDown(category)}
              onMouseLeave={() => this.handleMouseLeave(category)}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className="dropdown-menu" style={{ display: this.state.isShowDropDown ? "block" : "none" }}>
          
          <div className="list-menu">
            {this.state.listChildDropDown.map((child, childId) => (
            <div className="list-item" key={childId}>{child.name}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;