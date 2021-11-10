import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import { fetchCart } from "../../actions/cart_actions"
import { createCartItem } from "../../actions/cart_items_actions"
import ProductShow from "./product_show";
import { thunkCreateCartItem } from "../../actions/cart_items_actions"

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  createCartItem: (productId, quantity) =>
  dispatch(createCartItem(productId, quantity)),
  fetchCart: (userId) => dispatch(fetchCart(userId)),
  thunkCreateCartItem: (productId, quantity) => dispatch(thunkCreateCartItem(productId, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
