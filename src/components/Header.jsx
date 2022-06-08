import React, { useState } from 'react';
import logo from '@logos/logo_yard_sale.svg'
import MenuIcon from '@icons/icon_menu.svg'
import CartIcon from '@icons/icon_shopping_cart.svg'
import '@styles/Header.scss';
import Menu from './Menu';

const Header = () => {

	const [showMenu, setShowMenu] = useState(false)

	const handleShowMenu = () => [
		setShowMenu(!showMenu)
	]

	return (
		<>
			<nav>
				<img src={MenuIcon} alt="menu" className="Header-menu" />
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
						<li className="Header-navbar-email" onClick={handleShowMenu}>hermcode@gmail.com</li>
						<li className="Header-navbar-shopping-cart">
							<img src={CartIcon} alt="shopping cart" />
							<div>2</div>
						</li>
					</ul>
				</div>
				{showMenu && <Menu />}
			</nav>
		</>
	);
}

export default Header;
