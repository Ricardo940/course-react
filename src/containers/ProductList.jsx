import React, {useContext} from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import ProductDetail from '@containers/ProductDetail';
import useGetProducts from '../hooks/useGetProducts';
import AppContext from '../context/AppContext';
const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	
	const products = useGetProducts(API);

	const {state} = useContext(AppContext);


	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map( product => 
					<ProductItem product={product} key={product.id}/> )}	
			</div>
			{state.toggleProductDetail ? <ProductDetail /> : null}
		</section>
	);
}

export default ProductList;
