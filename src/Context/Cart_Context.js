import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducers/Cart_Reducer'

const CartContext = createContext()

const getLocalCartData = ()=>{
    let localCartData = localStorage.getItem("StoreCart")
    if(localCartData === ""){
        return []
    }else{
        return JSON.parse(localCartData)
    }
}

const initialState = {
    cart : getLocalCartData(),
    total_items : "",
    total_price : "",
    shipping_fee : 50000
}

const CartContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, amount, product) =>{
        dispatch({type : "ADD_TO_CART", payload :{id, color, amount, product} })
    }

    const setInc = (id)=>{
        dispatch({type : "SET_INCREMENT", payload : id})
    }

    const setDec = (id)=>{
        dispatch({type : "SET_DECREMENT", payload : id})
    }

    const removeItem = (id)=>{
        dispatch({type : "REMOVE_ITEM", payload : id })
    }

    // to clear a cart 
    const clearCart = ()=>{
        dispatch({type : "CLEAR_CART"})
    }

    // to store data in loacl Storage
    useEffect(()=>{
        dispatch({type : "CART_TOTAL_ITEM"})
        dispatch({type : "SET_CART_TOTALPRICE"})
        localStorage.setItem("StoreCart", JSON.stringify(state.cart))
    }, [state.cart])


    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setInc, setDec}}>{children}
    </CartContext.Provider>
}

const useCartContext = ()=>{
    return useContext(CartContext)
}

export {useCartContext, CartContextProvider}