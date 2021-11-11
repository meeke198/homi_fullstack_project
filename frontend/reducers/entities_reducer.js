//keep track/combine of all the relational data(reducer) in our app.
import { combineReducers } from 'redux';
import productsReducer from './products_reducer';
import usersReducer from './users_reducer';
import cartItemsReducer from './cart_items_reducer';
import cartReducer from './cart_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  cartItems: cartItemsReducer,
  cart: cartReducer,
});

export default entitiesReducer;