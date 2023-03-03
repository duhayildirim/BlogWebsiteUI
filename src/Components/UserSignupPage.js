import React from "react";
import { signUp } from '../api/loginCalls'

class UserSignupPage extends React.Component {

  state = {
    userName: null,
    displayName: null,
    email: null,
    password: null,
    passwordCheck: null,
    pandingApiCall: false,
    errors: {}
  }

  onChangeValue = e => {
    const { id, value } = e.target
    const errors = { ...this.state.errors }
    errors[id] = undefined
    this.setState({
      [id]: value,
      errors
    })
  }

  submit = async e => {
    e.preventDefault()
    this.setState({ pandingApiCall: true })

    const { userName, displayName, email, password } = this.state
    const body = { userName, displayName, email, password }

    try {
      const response = await signUp(body);
    } catch (error) {
      if (error.response.data.validationErrors) {
        this.setState({ errors: error.response.data.validationErrors })
      }
    }
    this.setState({ pandingApiCall: false })

    // signUp(body).then((response) => {
    //   this.setState({ pandingApiCall: false })
    // }).catch((error) => {
    //   this.setState({ pandingApiCall: false })
    // })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="text-center mt-4 name">
          <h1>Welcome</h1>
          <div className="subtitle">Let's create your account!</div>
        </div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input id="userName" onChange={this.onChangeValue} className="input" type="text" placeholder="Name*" />
          </div>
          {
            this.state.errors.userName && <div className="alert alert-danger" role="alert">
              Name field cannot be null.
            </div>
          }
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input id="displayName" onChange={this.onChangeValue} className="input" type="text" placeholder="Display name*" />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input id="email" onChange={this.onChangeValue} className="input" type="text" placeholder="Email*" />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input id="password" onChange={this.onChangeValue} className="input" type="password" placeholder="Password*" />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input id="passwordCheck" onChange={this.onChangeValue} className="input" type="password" placeholder="Password Check*" />
          </div>
          <button disabled={this.state.pandingApiCall} onClick={this.submit} className="btn mt-3">
            {
              !this.state.pandingApiCall ? "Submit" :
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only"></span>
                </div>
            }

          </button>
        </form>
        <div className="text-center fs-6">
          <a href="#">Sign up</a>
        </div>
      </div >
    )
  }
}

export default UserSignupPage