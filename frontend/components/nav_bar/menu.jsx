import React from "react";
import { Link } from 'react-router-dom';

const list = [
  {
    name: "Clothing & Shoe",
    child: [
      { name: "dresses", route: "dresses" },
      { name: "sweater", route: "bathroom" },
      { name: "sweater", route: "sweater" },
      { name: "pants", route: "pants" },
      { name: "coat", route: "bathroom" },
      { name: "skirts", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "bathroom", route: "bathroom" },
      { name: "garden", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "livingroom", route: "bathroom" },
    ],
  },
  {
    name: "Home & Living",
    child: [
      { name: "bedding", route: "bathroom" },
      { name: "bathroom", route: "bathroom" },
      { name: "garden", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "livingroom", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "bathroom", route: "bathroom" },
      { name: "garden", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "livingroom", route: "bathroom" },
    ],
  },

  {
    name: "Jewelry & Accessories",
    child: [
      { name: "rings", route: "bathroom" },
      { name: "bracelet", route: "bathroom" },
      { name: "watches", route: "bathroom" },
      { name: "hihi", route: "bathroom" },
      { name: "hehheehe", route: "bathroom" },
    ],
  },
  {
    name: "Art & Collectibles",
    child: [
      { name: "bedding", route: "bedding" },
      { name: "bathroom", route: "bathroom" },
      { name: "garden", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "livingroom", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "bathroom", route: "bathroom" },
      { name: "garden", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "livingroom", route: "bathroom" },
    ],
  },
  {
    name: "Craft Supplies",
    child: [
      { name: "afjfsaf", route: "bathroom" },
      { name: "afsdja", route: "bathroom" },
      { name: "garden", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "livingroom", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "bathroom", route: "bathroom" },
      { name: "garden", route: "bathroom" },
      { name: "bedding", route: "bathroom" },
      { name: "livingroom", route: "bathroom" },
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
  }
  handleDropDown(category){
    this.setState({listChildDropDown: category.child});
  }


  render() {
    return (
      <div style={{position: 'relative'}}
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
                <Link style={{textDecoration: 'none'}}
                  to={`/products/categories/${child.route}`}
                  className="list-item"
                  key={childId}
                >
                  {child.name}
                </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;