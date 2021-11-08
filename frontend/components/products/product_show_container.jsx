import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import ProductShow from "./product_show";

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId]
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
