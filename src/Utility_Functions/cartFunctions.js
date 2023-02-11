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

    const totalPrice = parseFloat(cartContext.reduce((sum, item) => sum + item.price, 0)).toFixed(2);

    return { cartContext, setCartContext, addToCart, removeFromCart, totalPrice }
}

