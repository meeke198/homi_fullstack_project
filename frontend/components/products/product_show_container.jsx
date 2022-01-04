import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import { fetchCart } from "../../actions/cart_actions"
import { openModal } from "../../actions/modal_actions"
import { createCartItem } from "../../actions/cart_items_actions"
import ProductShow from "./product_show";
import { thunkCreateCartItem, thunkFetchCartItems, thunkUpdateCartItem } from "../../actions/cart_items_actions"

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    currentUser: state.entities.users[state.session.id],
    cartItems: Object.values(state.entities.cartItems),

})
//[ownProps.match.params.productId] lay id tu url
//state(redux), ownProps(state tu cha truyen xuong = state cua react);
const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  fetchCartItems: () => dispatch(thunkFetchCartItems()),
  createCartItem: (cartItem) => dispatch(thunkCreateCartItem(cartItem)),
  updateCartItem: (cartItem) => dispatch(thunkUpdateCartItem(cartItem)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
