import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import OrderItem from '@components/OrderItem';
import ArrowIcon from '@icons/flechita.svg'
import AppContext from '../context/AppContext';
import totalSum from '../utils/totalSum';

import '@styles/MyOrder.scss';

const MyOrder = ({handleShowOrders}) => {

	const { state: {cart} } = useContext(AppContext)

	return (
		<aside className="MyOrder">
			<div className="MyOrder-title-container">
				<img src={ArrowIcon} alt="arrow" onClick={handleShowOrders}/>
				<p className="MyOrder-title">My order</p>
			</div>
			<div>
				<div className="MyOrder-my-order-content">
					{
						cart.map((product, index) => <OrderItem key={index} product={product} index={index}/>)
					}
				</div>
				
				<div className="MyOrder-order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalSum(cart)}.00</p>
				</div>
				<Link to='/checkout'>
					<button className="MyOrder-primary-button" onClick={handleShowOrders}>
							Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;
