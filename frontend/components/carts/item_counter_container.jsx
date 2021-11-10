import { connect } from 'react-redux';
import ItemCounter from './item_counter';


export const mSTP = state => ({
    items: state.entities.cartItems,
    // currentUser: state.entities.user[state.session.id]
})


export default connect(mSTP, null)(ItemCounter)