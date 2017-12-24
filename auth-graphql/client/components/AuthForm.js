import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div className="row">
        <form className="col s6">
          <div className="input-field">
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={(event) => this.setState({email: event.target.value})}
              />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={(event) => this.setState({password: event.target.value})}
              type="password"
              />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default AuthForm;
