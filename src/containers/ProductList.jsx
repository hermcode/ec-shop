import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import { useGetProducts } from '../hooks/useGetProducts';

import '@styles/ProductList.scss';
import SpinnerLoader from '../components/SpinnerLoader';

const API = 'https://api.escuelajs.co/api/v1/products?limit=21&offset=1'

const ProductList = () => {
	
	const {products, isLoading} = useGetProducts(API)

	return (
		<section className="main-container">
			{
				isLoading 
				? <SpinnerLoader />
				: <div className="ProductList">
						{
							products.map((product) => (
								<ProductItem key={product.id} product={product} />
							))
						}
					</div>
			}
		</section>
	);
}

export default ProductList;
