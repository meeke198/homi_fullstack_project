import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import Category from "./category";


const mapStateToProps = (state) => ({
  products: Object.values(state.entities.products),
//   currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);