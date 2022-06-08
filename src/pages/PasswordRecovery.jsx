import React from 'react'
import logo from '@logos/logo_yard_sale.svg'
import '@styles/PasswordRecovery.scss'
import { Link } from 'react-router-dom'

const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={logo} alt="logo" className="PasswordRecovery-logo" />
				<h1 className="PasswordRecovery-title">Password recovery</h1>
				<p className="PasswordRecovery-subtitle">Inform the email address used to create your account</p>
				<form action="/" className="PasswordRecovery-form">
					<label htmlFor="email" className="PasswordRecovery-label">Email address</label>
					<input type="text" id="email" className="PasswordRecovery-input PasswordRecovery-input-email" />
					<Link to='/email-sent'>
						<input type="submit" value="Confirm" className="PasswordRecovery-primary-button PasswordRecovery-login-button" />
					</Link>
				</form>
			</div>
		</div>
  )
}

export default PasswordRecovery