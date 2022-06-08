import React, { useContext, useState } from 'react';
import logo from '@logos/logo_yard_sale.svg'
import MenuIcon from '@icons/icon_menu.svg'
import CartIcon from '@icons/icon_shopping_cart.svg'
import Menu from './Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

import '@styles/Header.scss';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

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

	const handleHideAll = () => {
		setShowOrders(false)
		setShowMobileMenu(false)
		setShowMenu(false)
	}

	return (
		<>
			<nav>
				<img src={MenuIcon} alt="menu" className="Header-menu" onClick={handleShowMobileMenu}/>
				<div className="Header-navbar-left">
					<Link to='/' onClick={handleHideAll}>
						<img src={logo} alt="logo" className="Header-logo" />
					</Link>
					<ul>
						<li>
							<Link to='/'>All</Link>
						</li>
						<li>
							<Link to='/'>Clothes</Link>
						</li>
						<li>
							<Link to='/'>Electronics</Link>
						</li>
						<li>
							<Link to='/'>Furnitures</Link>
						</li>
						<li>
							<Link to='/'>Toys</Link>
						</li>
						<li>
							<Link to='/'>Others</Link>
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
				{showMenu && <Menu handleShowMenu={handleShowMenu}/>}
				{showMobileMenu && <MobileMenu handleHideAll={handleHideAll}/>}
				{showOrders && <MyOrder handleShowOrders={handleShowOrders}/>}
			
			</nav>
		</>
	);
}

export default Header;
