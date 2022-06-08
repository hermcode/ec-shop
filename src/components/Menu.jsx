import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/Menu.scss';

const Menu = ({handleShowMenu}) => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<Link to='/checkout' onClick={handleShowMenu}>My orders</Link>
				</li>
				<li>
					<Link to='/account' onClick={handleShowMenu}>My Account</Link>
				</li>
				<li>
					<Link to='/login' onClick={handleShowMenu}>Sign out</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
