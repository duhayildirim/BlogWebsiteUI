import React from "react";

const Input = (props) => {
  return (
    <>
      <div className="form-field d-flex align-items-center">
        <span className="far fa-user"></span>
        <input id={props.error} onChange={props.onChangeValue} className="input" type={props.type} placeholder={props.title} />
      </div>
      {
        props.name && <div className="alert alert-danger" role="alert">
          {props.title} {props.message}
        </div>
      }
    </>
  )
}

export default Input