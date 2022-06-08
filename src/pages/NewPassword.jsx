import React from 'react'
import logo from '@logos/logo_yard_sale.svg'
import '@styles/NewPassword.scss'

const Login = () => {
  return (
    <div className="NewPassword">
			<div className="NewPassword-container">
				<img src={logo} alt="logo" className="NewPassword-logo" />
				<h1 className="NewPassword-title">Create a new password</h1>
				<p className="NewPassword-subtitle">Enter a new password for your account</p>
				<form action="/" className="NewPassword-form">
					<label for="password" className="NewPassword-label">Password</label>
					<input type="password" id="password" placeholder="*********" className="NewPassword-input input-password" />
					<label for="new-password" className="NewPassword-label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="NewPassword-input input-password" />
					<input type="submit" value="Confirm" className="NewPassword-primary-button NewPassword-login-button" />
				</form>
			</div>
		</div>
  )
}

export default Login