import React from "react";
import { signUp } from '../api/loginCalls'
import Input from "../Components/Input";

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
    delete errors[id]
    if (id === "password" || id === "passwordCheck") {
      if (id === "password" && value !== this.state.passwordCheck) {
        errors.passwordCheck = "mismatch."
      } else if (id === "passwordCheck" && value !== this.state.password) {
        errors.passwordCheck = "mismatch."
      } else {
        delete errors.passwordCheck
        delete errors.password
      }
    }

    this.setState({
      [id]: value,
      errors
    })
  }

  submit = async e => {
    e.preventDefault()
    this.setState({ pandingApiCall: true })

    const { userName, displayName, email, password} = this.state
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
          <Input onChangeValue={this.onChangeValue} type={"text"} message={this.state.errors.userName} error={"userName"} title={"User name"} name={this.state.errors.userName ? "User name" : undefined} />
          <Input onChangeValue={this.onChangeValue} message={this.state.errors.displayName} type={"text"} error={"displayName"} title={"Display name"} name={this.state.errors.displayName ? "Display name" : undefined} />
          <Input onChangeValue={this.onChangeValue} message={this.state.errors.email} type={"email"} error={"email"} title={"Email"} name={this.state.errors.email ? "Email" : undefined} />
          <Input onChangeValue={this.onChangeValue} message={this.state.errors.password} type={"password"} error={"password"} title={"Password"} name={this.state.errors.password ? "Password" : undefined} />
          <Input onChangeValue={this.onChangeValue} type={"password"} message={this.state.errors.passwordCheck} error={"passwordCheck"} title={"Password repeat"} name={this.state.errors.passwordCheck ? "passwordCheck" : undefined} />
          <button disabled={this.state.pandingApiCall || this.state.passwordCheck !== this.state.password} onClick={this.submit} className="btn mt-3">
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