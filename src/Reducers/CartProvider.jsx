import { useReducer, createContext } from 'react';
import cartReducer from './CartReducer';

export const initialState = [];
export const CartContext = createContext([]);


const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);


    const onAddHandler = (details) => {
        const action = {
            type: 'ADD',
            payload: details
        };
        dispatch(action);
    };

    const onDeleteHandler = (details) => {
        const action = {
            type: 'DEL',
            payload: details
        };
        dispatch(action);
    };

    return (
        <CartContext.Provider value={{ state, onAddHandler, onDeleteHandler }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;