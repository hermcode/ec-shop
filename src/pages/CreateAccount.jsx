import React from 'react'
import '@styles/CreateAccount.scss'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="CreateAccount-title">My account</h1>
				<form action="/" className="CreateAccount-form">
					<div>
						<label htmlFor="name" className="CreateAccount-label">Name</label>
						<input type="text" id="name" placeholder="Teff" className="CreateAccount-input CreateAccount-input-name" />
						<label htmlFor="email" className="CreateAccount-label">Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className="CreateAccount-input input-email" />
						<label htmlFor="password" className="CreateAccount-label">Password</label>
						<input type="password" id="password" placeholder="*********" className="CreateAccount-input input-password" />
					</div>
					<Link to='/'>
						<input type="submit" value="Create" className="CreateAccount-primary-button CreateAccount-login-button" />
					</Link>
				</form>
			</div>
		</div>

  )
}

export default CreateAccount