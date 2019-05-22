import React, { Component } from 'react'
import ForgotPassword from '../../AuthComponents/ResetPassword/forgotPassword';

export default class AccountSettings extends Component {
  render() {
    return (
      <div>
        <h3>Reset Password</h3>
        <ForgotPassword />
      </div>
    )
  }
}
