import React, { lazy, useContext } from 'react'
import { CartContext } from '../Reducers/CartProvider';
const Cart = lazy(() => import('sharedComp/Cart'));

const HostCart = () => {
    const sharedContext = useContext(CartContext);
    return <Cart cartContext={sharedContext}/>
}

export default HostCart
