import React from "react";

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
      [id] : value
    })
  }

  render() {
    return (
      <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <form>
          <div className="input-container ic1">
            <input id="userName" onChange={this.onChangeValue} className="input" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="username" className="placeholder">User name</label>
          </div>
          <div className="input-container ic2">
            <input id="displayName" onChange={this.onChangeValue} className="input" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="displayName" className="placeholder">Display name</label>
          </div>
          <div className="input-container ic2">
            <input id="email" onChange={this.onChangeValue} className="input" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="email" className="placeholder">Email</label>
          </div>
          <div className="input-container ic2">
            <input id="password" onChange={this.onChangeValue} className="input" type="password" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="lastname" className="placeholder">Password</label>
          </div>
          <div className="input-container ic2">
            <input id="passwordCheck" onChange={this.onChangeValue} className="input" type="password" placeholder=" " />
            <div className="cut "></div>
            <label htmlFor="lastname" className="placeholder">Password Check</label>
          </div>
          <button type="text" className="submit">SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default UserSignupPage