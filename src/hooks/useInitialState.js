import { useState } from "react";

const initialState = {
    cart: [],
    toggleProductDetail: false,
    toggleCart: false,
    productDetail: null
}

const useInitialState = () => {
    
    const [state, setState] = useState(initialState);



    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (payload) => {
        setState({
            ...state, 
            cart: state.cart.filter(items => items.id != payload.id)
        })
    }

    const isInCart = (product) => {
        return state.cart.includes(product);
    }

    const handleToggleCart = () => {
        setState({
            ...state, 
            toggleCart: !state.toggleCart
        })
    }

    const setToggleProductDetail = (product) => {
        if(state.toggleProductDetail){
            if(!product){
                product = state.productDetail;
            }
            if(state.productDetail.id == product.id){
                setState({
                    ...state,
                    toggleProductDetail : !state.toggleProductDetail,
                    productDetail: null
                })
            }else{
                setState({
                    ...state,
                    productDetail: product
                })
            }
        }else{
            setState({
                ...state,
                toggleProductDetail : !state.toggleProductDetail,
                productDetail: product
            });
        }
		
	}

    return {
        state,
        addToCart,
        removeFromCart,
        isInCart,
        setToggleProductDetail,
        handleToggleCart
    }
}


export default useInitialState;