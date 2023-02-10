import React, { useContext } from 'react'
import { Context } from '../App'

export const CartFunctions = () => {

    const { cartContext, setCartContext } = useContext(Context);

    const addToCart = (product) => {
        setCartContext([...cartContext, product])
        localStorage.setItem('cartContext', JSON.stringify([...cartContext, product]))
    }

    return { cartContext, setCartContext, addToCart }
}

