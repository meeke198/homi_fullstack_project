import { RECEIVE_ALL_PRODUCTS, RECIEVE_PRODUCT } from "../actions/product_actions";

const FakeProducts = [
  {
    id: 1,
    product_name: "Set of Fully Dry wood slices!",
    description:
      "Unique and refined, our vases decorate large and small spaces to give them an incredible personality.",
    price: 18.22,
    seller_id: 1,
    image_url:
      "https://i.etsystatic.com/12214072/r/il/4da239/2064665819/il_1588xN.2064665819_m0x1.jpg",
  },
  {
    id: 2,
    product_name: "Mini Bubble Set for Home Decoration- Nordic Vase Collection",
    description:
      "Want something special in your home? Check out these Ceramic Vases for Flowers! Unique and refined, our vases decorate large and small spaces to give them an incredible personality.",
    price: 18.22,
    seller_id: 2,
    image_url:
      "https://i.etsystatic.com/23426316/r/il/e45b03/3258188475/il_1588xN.3258188475_aqwp.jpg",
  },
  {
    id: 3,
    product_name: "Ceramic Vases asfdasdfad",
    description:
      "Want something special in your home? Check out these Ceramic Vases for Flowers! Unique and refined, our vases decorate large and small spaces to give them an incredible personality.",
    price: 20.22,
    seller_id: 3,
    image_url:
      "https://i.etsystatic.com/10204022/r/il/18e97e/2550873428/il_1588xN.2550873428_rvbc.jpg",
  },
   {
    id: 4,
    product_name: "Ceramic",
    description:
      "Want something special in your home]",
    price: 20.22,
    seller_id: 3,
    image_url:
      "https://i.etsystatic.com/10204022/r/il/18e97e/2550873428/il_1588xN.2550873428_rvbc.jpg",
  },
];

const productsReducer = (state = FakeProducts, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECIEVE_PRODUCT:
            nextState[action.product.id] = action.product
            return nextState;
        default:
            return state;
    }
}

export default productsReducer;