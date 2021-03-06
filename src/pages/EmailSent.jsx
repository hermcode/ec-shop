import React from 'react'
import logo from '@logos/logo_yard_sale.svg'
import email from '@icons/email.svg'
import '@styles/EmailSent.scss'
import { Link } from 'react-router-dom'

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
        <Link to='/login' className='EmailSent-primary-button EmailSent-login-button'>
          <button className="EmailSent-primary-button">Login</button>
        </Link>
        <p className="EmailSent-resend">
          <span>Didn't receive the email?</span>
          <Link to='/email-sent'> Resend</Link>
        </p>
      </div>
    </div>

  )
}

export default ResetPassword