import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';
import ItemCounter from './item_counter';


export const mSTP = state => ({
    items: state.entities.cartItems,
    currentUser: state.entities.user[state.session.id]
})

export const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(ItemCounter)