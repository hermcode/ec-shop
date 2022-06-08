import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '@logos/logo_yard_sale.svg'
import '@styles/Login.scss'

const Login = () => {

	const form = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(form.current)
		const data = {
			email: formData.get('email'),
			password: formData.get('password')
		}
	}
  return (
    <div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="Login-logo" />
				<form action="/" className="Login-form" ref={form}>
					<label htmlFor="email" className="Login-label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="Login-input Login-input-email" />
					<label htmlFor="password" className="Login-label">Password</label>
					<input type="password" name="password" placeholder="*********" className="Login-input Login-input-password" />
					<Link to='/'>
						<input type="submit" value="Log in" className="Login-primary-button Login-login-button"/>
					</Link>
					<Link to='/password-recovery'>Forgot my password</Link>
				</form>
				<Link to='/signup'>
					<button className="Login-secondary-button Login-signup-button">Sign up</button>
				</Link>
			</div>
		</div>
  )
}

export default Login