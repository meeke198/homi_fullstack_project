import { openModal } from "../../actions/modal_actions";


export const mSTP = (state) => ({
  items: state.entities.cartItems,
  currentUser: state.entities.user[state.session.id]
});
export const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
});
