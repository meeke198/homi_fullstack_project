import { connect } from 'react-redux' 
import { fetchProducts } from '../../actions/product_actions'
import ProductIndex from './product_index'


const mapStateToProps = (state) => ({
  products: Object.values(state.entities.products),
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (searchInputTerm) => dispatch(fetchProducts(searchInputTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);