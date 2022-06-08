import React, { useContext } from 'react';
import ProductItem from '@components/ProductItem';
import { useGetProducts } from '../hooks/useGetProducts';
import SpinnerLoader from '../components/SpinnerLoader';

import '@styles/ProductList.scss';

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
