import React from "react";
import { Link } from 'react-router-dom';

export const list = [
  {
    name: "Wall decor",
    child: [
      { name: "Vases", route: "vases" },
      { name: "custom Sleepers", route: "floatingshelves" },
      { name: "Wallarts", route: "wallarts" },
      { name: "Paintings", route: "paintings" },
      { name: "Mirrors", route: "mirrors" },
      { name: "Key holders", route: "keyholders" },
      { name: "Wall Clocks", route: "wallclocks" },
      { name: "Wall Stecils", route: "wallstecils" },
      { name: "Wall Decals", route: "walldecals" },
      { name: "Macrames", route: "macrames" },
    ],
  },
  {
    name: "Living room",
    child: [
      { name: "Tables", route: "tables" },
      { name: "Sofas", route: "sofas" },
      { name: "Shelves", route: "shelves" },
      { name: "Couches", route: "couches" },
      { name: "Livingroom", route: "bathroom" },
      { name: "Coffee tables", route: "coffeetables" },
      { name: "TV tables", route: "tvtables" },
      { name: "Floor lamps", route: "floorlamps" },
      { name: "Chandeliers", route: "chandeliers" },
      { name: "Rugs", route: "rugs" },
    ],
  },
  {
    name: "Bedding & Bath",
    child: [
      { name: "Bedframes", route: "bedframes" },
      { name: "Pillows", route: "pillows" },
      { name: "Towels", route: "towels" },
      { name: "Blankets", route: "blankets" },
      { name: "Nightstands", route: "nightstands" },
      { name: "Dressers", route: "dressers" },
      { name: "Makeup Vanities", route: "makeupvanities" },
      { name: "Bedroom Benches", route: "bedroombenches" },
      { name: "Wardrobes", route: "wardrobes" },
      { name: "Vanity Tools", route: "vanitytools" },
    ],
  },
  {
    name: "Garden",
    child: [
      { name: "Statues", route: "statues" },
      { name: "Planters", route: "planters" },
      { name: "Potting Tables", route: "pottingtables" },
      { name: "Arbors", route: "arbors" },
      { name: "Green Houses", route: "greenhouses" },
      { name: "Statues", route: "statues" },
      { name: "Planters", route: "planters" },
      { name: "Potting Tables", route: "pottingtables" },
      { name: "Arbors", route: "arbors" },
      { name: "Green Houses", route: "greenhouses" },
    ],
  },
  {
    name: "Kitchen",
    child: [
      { name: "Tools", route: "tools" },
      { name: "Dining Tables", route: "diningtables" },
      { name: "Silverware", route: "silverware" },
      { name: "Cookware", route: "cookware" },
      { name: "Bar Furniture", route: "barfurniture" },
      { name: "Wince Racks", route: "wineracks" },
      { name: "Organization", route: "organization" },
      { name: "Baker Racks", route: "bakerracks" },
      { name: "Tabletops", route: "tabletops" },
    ],
  },
  {
    name: "Customized Furniture",
    child: [
      { name: "Custom sofas", route: "customsofas" },
      { name: "Custom Sleepers", route: "customsleepers" },
      { name: "Custom Headboards", route: "customheadboards" },
      { name: "Custom Recliners", route: "customrecliners" },
      { name: "Custom Gliders", route: "customgliders" },
      { name: "Custom Beds", route: "custombeds" },
      { name: "Custom Bar Tools", route: "custombartool" },
      { name: "Custom Sectionals", route: "customsectionals" },
      { name: "Custom Dining Chairs", route: "customdiningchairs" },
      { name: "Custom Loveseats", route: "customloveseats" },
    ],
  },
  {
    name: "Art & Collectible",
    child: [
      { name: "Fine Art", route: "fineart" },
      { name: "Abstract", route: "abstract" },
      { name: "Modern", route: "modern" },
      { name: "Landscape", route: "landscape" },
      { name: "Portrait", route: "portrait" },
      { name: "Nature", route: "nature" },
      { name: "Animal", route: "animal" },
      { name: "People", route: "people" },
      { name: "Illustration", route: "illustration" },
      { name: "Street Art", route: "streetart" },
    ],
  },
];


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
                <Link className="category-link" style={{textDecoration: 'none'}}
                  to={`/products/categories/${child.route}`}
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