import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isSubmited: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.errors.length === 0 && this.state.isSubmited === true) {
      this.props.closeModal();
    }
    return true;
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {email: this.state.email, password: this.state.password};
    this.props.processForm(user);
    this.setState({isSubmited: true})
    localStorage.setItem("messageWelcome", true)
  }

  loginDemo() {
    const demoUser = {
      email: "demo@gmail.com",
      password: "password123",
    };
    this.props.processForm(demoUser);
    this.props.closeModal();
  }

  renderErrors() {
    return (
      <div style={{ marginTop: 20, lineHeight: 1 }}>
        {this.props.errors.map((error, i) => (
          <p className="error-text" style={{ width: "100%" }} key={`${i}`}>
            {error}
          </p>
        ))}
      </div>
    );
  }

  render() {
    const { openModal, errors } = this.props
    if (this.props.formType === "login") {
      return (
        <div className="login-form-container">
          <div className="close-modal-button">
            <AiOutlineCloseCircle
              style={{ width: 30, height: 30 }}
              onClick={this.props.closeModal}
            />
          </div>
        

          <form className="form-box">
            <br />

            <div className="login-form">
              <br />
              <div className="form-input-wrapper">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="form-input"
                />
              </div>

              <br />
              <div className="form-input-wrapper">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="form-input"
                />
              </div>
              {this.renderErrors()}
              <br />
              <div className="session-form-bottom">
                <input
                  className="submit-form-button login"
                  type="submit"
                  value="Log in"
                  onClick={this.handleSubmit}
                />
                <p>
                  Have no account?{" "}
                  <span
                    onClick={() => openModal("signup")}
                    style={{ fontWeight: 900, cursor: "grab" }}
                  >
                    Register
                  </span>
                </p>
                <br />
                <button type="button" className="btn" onClick={this.loginDemo}>
                  Demo User
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="login-form-container">
          <AiOutlineCloseCircle
            className="close-modal-button"
            onClick={this.props.closeModal}
            style={{ marginLeft: 330, width: 30, height: 30 }}
          />
          <form onSubmit={this.handleSubmit} className="form-box">
            <br />
            <div className="login-form">
              <br />
              <div className="form-input-wrapper">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="form-input"
                />
              </div>

              <br />
              <div className="form-input-wrapper">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="form-input"
                />
              </div>
              <br />
              {this.renderErrors()}
              <br />
              <div className="session-form-bottom">
                <input
                  className="submit-form-button login"
                  type="submit"
                  value="Sign up"
                />
                <p style={{ textAlign: "center" }}>
                  Have an account?{" "}
                  <span
                    onClick={() => openModal("login")}
                    style={{ fontWeight: 900, cursor: "grab" }}
                  >
                    Log in
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default SessionForm;
//this.props.processForm(user) => similar to action, actions container(mDTP) it either login or signup user
