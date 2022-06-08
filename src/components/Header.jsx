import React, { useContext, useState } from 'react';
import logo from '@logos/logo_yard_sale.svg'
import MenuIcon from '@icons/icon_menu.svg'
import CartIcon from '@icons/icon_shopping_cart.svg'
import Menu from './Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

import '@styles/Header.scss';
import MobileMenu from './MobileMenu';

const Header = () => {

	const { state: {cart} } = useContext(AppContext)

	const [showMenu, setShowMenu] = useState(false)
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	const [showOrders, setShowOrders] = useState(false)

	const handleShowMenu = () => {
		setShowMenu(!showMenu)
		setShowMobileMenu(false)
		setShowOrders(false)
	}
	const handleShowMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu)
		setShowMenu(false)
		setShowOrders(false)
	}
	const handleShowOrders = () => {
		setShowOrders(!showOrders)
		setShowMobileMenu(false)
		setShowMenu(false)
	}

	return (
		<>
			<nav>
				<img src={MenuIcon} alt="menu" className="Header-menu" onClick={handleShowMobileMenu}/>
				<div className="Header-navbar-left">
					<img src={logo} alt="logo" className="Header-logo" />
					<ul>
						<li>
							<a href="/">All</a>
						</li>
						<li>
							<a href="/">Clothes</a>
						</li>
						<li>
							<a href="/">Electronics</a>
						</li>
						<li>
							<a href="/">Furnitures</a>
						</li>
						<li>
							<a href="/">Toys</a>
						</li>
						<li>
							<a href="/">Others</a>
						</li>
					</ul>
				</div>
				<div className="Header-navbar-right">
					<ul>
						<li 
							className="Header-navbar-email" 
							onClick={handleShowMenu}
						>
							hermcode@gmail.com
						</li>
						<li className="Header-navbar-shopping-cart" onClick={handleShowOrders}>
							<img src={CartIcon} alt="shopping cart" />
							{ 
								cart.length > 0 && <div>{ cart.length > 9 ? '+9' : cart.length }</div>
							}
						</li>
					</ul>
				</div>
				{showMenu && <Menu />}
				{showMobileMenu && <MobileMenu />}
				{showOrders && <MyOrder handleShowOrders={handleShowOrders}/>}
			
			</nav>
		</>
	);
}

export default Header;
