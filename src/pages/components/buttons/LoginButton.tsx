import React from 'react'

function LoginButton(props) {
  let buttonClass = "";
  if (props.borderColor) {
    buttonClass = buttonClass + "btn btn-CSTM-ep-green text-nowrap text-white px-4 my-4";
  } else {
    buttonClass = buttonClass + "btn btn-link text-nowrap px-4 my-4";
  }

  return (
    <a onClick={props.onClick} className={buttonClass}>{props.buttonText}</a>
  )
}

export default LoginButton
