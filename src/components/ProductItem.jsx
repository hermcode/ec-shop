import React from 'react';
import AddToCartIcon from '@icons/bt_add_to_cart.svg'
import '@styles/ProductItem.scss';

const ProductItem = ({product}) => {
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}.00</p>
					<p>{product.title}</p>
				</div>
				<figure>
					<img src={AddToCartIcon} alt="Add to cart icon" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
