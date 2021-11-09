import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import ProductShow from "./product_show";

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  createCartItem: (productId, quantity) => dispatch(createCartItem(productId, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
