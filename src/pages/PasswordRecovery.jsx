import React from 'react'
import '@styles/PasswordRecovery.scss'

const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="PasswordRecovery-logo" />
				<h1 className="PasswordRecovery-title">Password recovery</h1>
				<p className="PasswordRecovery-subtitle">Inform the email address used to create your account</p>
				<form action="/" className="PasswordRecovery-form">
					<label htmlFor="email" className="PasswordRecovery-label">Email address</label>
					<input type="text" id="email" className="PasswordRecovery-input PasswordRecovery-input-email" />
					<input type="submit" value="Confirm" className="PasswordRecovery-primary-button PasswordRecovery-login-button" />
				</form>
			</div>
		</div>
  )
}

export default PasswordRecovery