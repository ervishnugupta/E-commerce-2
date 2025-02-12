// create a Context
// provider
// consumer => useContext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducers/ProductReducer";    


const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const initialState = {
    products: [],
    featureProducts: [],
    isLoading: false,
    isError: false,
    isSingleLoading : false,
    singleProduct : {}
}

 const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState)
    const getProducts = async(url)=>{

        dispatch({type : "SET_LOADING"})

        try {
            const response = await axios.get(url)
        // console.log(response);
            const products = await response.data 
            dispatch({type: "SET_API_DATA", payload : products
        }) 
        } catch (error) {
            dispatch({type: "API_ERROR"}) 
        }  
    }

    const getSingleProduct = async (url)=>{
        dispatch({type : "SET_SINGLE_LOADING"})
        try {
            const response = await axios.get(url)
            const singleProduct = response.data
            // console.log(singleProduct);
            
            dispatch({type: "SET_SINGLE_PRODUCT" , payload: singleProduct})
        } catch (error) {
            dispatch({type : "SET_SINGLE_ERROR"})
        }
    }

    useEffect(()=>{
        getProducts(API)
    },[])

    return <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>
}

const useProductContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useProductContext}