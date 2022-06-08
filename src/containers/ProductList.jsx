import React from 'react';
import ProductItem from '@components/ProductItem';
import { useGetProducts } from '../hooks/useGetProducts';
import SpinnerLoader from '../components/SpinnerLoader';

import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {

	const {products, isLoading} = useGetProducts(API)
	console.log(products);

	return (
		<section className="main-container">
			{
				isLoading 
				? <SpinnerLoader />
				: <div className="ProductList">
						{
							products.map((product, index) => (
								<ProductItem key={index} product={product} />
							))
						}
					</div>
			}
		</section>
	);
}

export default ProductList;
