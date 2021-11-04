import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
      this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {

    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`${i}`}>{error}</li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="login-form-container">
        <AiOutlineCloseCircle
          className="close-modal-button"
          onClick={this.props.closeModal}
        />
        <form onSubmit={this.handleSubmit} className="form-box">
          <br />
          <h3>
            Please {this.props.formType} {this.props.navLink}
          </h3>
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label className="form-label">
              Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="form-input"
              />
            </label>
            <br />
            <label className="form-label">
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="form-input"
              />
            </label>
            <br />
            <input
              className="submit-form-button"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
//this.props.processForm(user) => similar to action, actions container(mDTP) it either login or signup user