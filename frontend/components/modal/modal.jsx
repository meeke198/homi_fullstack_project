import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";

// class Modal extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             signup: false,
//             login: false,
//         }
//     }

// onOpenModal = () => {
//     this.setState({signup: true })
// }
// onOpenModalLogin = () => {
//     this.setState({login: true })
// }

// onCloseModal = () => {
//     this.setState({signup: false})
// }

// onCloseModalClose = () => {
//     this.setState({login: false})
// }
function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    modal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
