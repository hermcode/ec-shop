import React, { useContext } from 'react';
import AddToCartIcon from '@icons/bt_add_to_cart.svg'
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';

const ProductItem = ({product}) => {

	const { addToCart } = useContext(AppContext)
	
	const handleAddToCart = (item) => {
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}.00</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleAddToCart(product)}>
					<img src={AddToCartIcon} alt="Add to cart icon" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
