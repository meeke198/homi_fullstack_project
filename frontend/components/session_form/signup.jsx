import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }
  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
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
      <div className="modal-background">
        <div className="modal-child">
          <form onSubmit={this.handleSubmit} className="form-box">
            <br />
            {this.renderErrors()}
            <br />
            <h3>Sign up</h3>
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
              value="Sign up"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
