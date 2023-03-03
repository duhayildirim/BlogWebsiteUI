import React from "react";
import axios from "axios";

class UserSignupPage extends React.Component {

  state = {
    userName: null,
    displayName: null,
    email: null,
    password: null,
    passwordCheck: null,
  }

  onChangeValue = e => {
    const { id, value } = e.target
    this.setState({
      [id]: value
    })
  }

  signUp = e => {
    e.preventDefault()
    const { userName, displayName, email, password } = this.state
    const body = { userName, displayName, email, password }
    axios.post("/api/1.0/users", body)
  }

  render() {
    return (
      <div class="wrapper">
        <div class="text-center mt-4 name">
          <h1>Welcome</h1>
          <div className="subtitle">Let's create your account!</div>
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input id="userName" onChange={this.onChangeValue} className="input" type="text" placeholder="Name" />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input id="displayName" onChange={this.onChangeValue} className="input" type="text" placeholder="Display name" />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input id="email" onChange={this.onChangeValue} className="input" type="text" placeholder="Email" />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input id="password" onChange={this.onChangeValue} className="input" type="password" placeholder="Password" />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input id="passwordCheck" onChange={this.onChangeValue} className="input" type="password" placeholder="Password Check" />
            </div>
            <button onClick={this.signUp} class="btn mt-3">Submit</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Sign up</a>
        </div>
    </div>
    )
  }
}

export default UserSignupPage