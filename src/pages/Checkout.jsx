import React, { useContext } from 'react'
import OrderItem from '@components/OrderItem'
import AppContext from '../context/AppContext'
import '@styles/Checkout.scss'
import totalSum from '../utils/totalSum'

const Checkout = () => {
	const { state: {cart} } = useContext(AppContext)
  return (
    <div className="Checkout">
			<div className="Checkout-container">
				<h1 className="Checkout-title">My order</h1>
				<div className="Checkout-Checkout-content">
					<div className="Checkout-order">
						<p>
							<span></span>
							<span>{cart.length} articles</span>
						</p>
						<p>${totalSum(cart)}.00</p>
					</div>
				</div>
				{
					cart.map((product, index) => <OrderItem key={index} product={product} index={index}/>)
				}
			</div>
		</div>
  )
}

export default Checkout