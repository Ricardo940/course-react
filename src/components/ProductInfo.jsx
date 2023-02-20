import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductInfo.scss';

import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {

	const {state} = useContext(AppContext);

	return (
		<>
			<img src={state.productDetail.images[0]} alt={state.productDetail.title} />
			<div className="ProductInfo">
				<p>${state.productDetail.price}</p>
				<p>{state.productDetail.title}</p>
				<p>{state.productDetail.description}</p>
				<button className="primary-button add-to-cart-button">
					<img src={addToCartIcon} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;