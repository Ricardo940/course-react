import React, {useContext} from 'react';
import ProductInfo from '@components/ProductInfo';
import AppContext from '../context/AppContext';
import '@styles/ProductDetail.scss';

import closeIcon from '@icons/icon_close.png';

const ProductDetail = () => {

	const {setToggleProductDetail} = useContext(AppContext);

	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close" onClick={() => setToggleProductDetail()}>
				<img src={closeIcon} alt="close"  />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;