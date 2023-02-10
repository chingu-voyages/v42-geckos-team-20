import React, { useContext } from 'react'
import { Context } from '../App'

export const CartFunctions = () => {

    const { cartContext, setCartContext } = useContext(Context);

    const addToCart = (product) => {
        setCartContext([...cartContext, product])
        localStorage.setItem('cartContext', JSON.stringify([...cartContext, product]))
    }
    const removeFromCart = productId => {
        const updatedCart = cartContext.filter(product => product.id !== productId);
        setCartContext(updatedCart)
        localStorage.setItem('cartContext', JSON.stringify(updatedCart));
    }
    return { cartContext, setCartContext, addToCart, removeFromCart }
}

