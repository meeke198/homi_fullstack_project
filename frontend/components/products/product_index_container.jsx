import { connect } from 'react-redux' 
import { fetchProducts, fetchProduct } from '../../actions/product_actions'
import ProductIndex from './product_index'


const mapStateToProps = state => ({
    products: Object.values(state.entities.products),
    currentUSer: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);