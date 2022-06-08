import React from 'react';
import logo from '@logos/logo_yard_sale.svg'
import MenuIcon from '@icons/icon_menu.svg'
import CartIcon from '@icons/icon_shopping_cart.svg'
import '@styles/Header.scss';

const Header = () => {
	return (
		<nav>
			<img src={MenuIcon} alt="menu" className="menu" />
			<div className="navbar-left">
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
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">hermcode@gmail.com</li>
					<li className="navbar-shopping-cart">
						<img src={CartIcon} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
