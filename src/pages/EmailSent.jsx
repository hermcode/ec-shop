import React from 'react'
import logo from '../../public/assets/logos/logo_yard_sale.svg'
import email from '../../public/assets/icons/email.svg'
import '../styles/EmailSent.scss'

const ResetPassword = () => {
  return (
    <div className="EmailSent">
      <div className="EmailSent-container">
        <img src={logo} alt="logo" className="EmailSent-logo" />
        <h1 className="EmailSent-title">Email has been sent!</h1>
        <p className="EmailSent-subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="EmailSent-email-image">
          <img src={email} alt="email" />
        </div>
        <button className="EmailSent-primary-button EmailSent-login-button">Login</button>
        <p className="EmailSent-resend">
          <span>Didn't receive the email?</span>
          <a href="/"> Resend</a>
        </p>
      </div>
    </div>

  )
}

export default ResetPassword