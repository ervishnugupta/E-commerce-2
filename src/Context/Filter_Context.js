import { useContext } from "react";
import { createContext } from "react";
import { useProductContext } from "./ProductContext";
import { useReducer } from "react";
import reducer from "../Reducers/Filter_Reducer";
import { useEffect } from "react";


const FilterContext = createContext()

const initialState = {
    filter_products : [],
    all_products : [],
    grid_view : true,
    sorting_value : "lowest",
    filters : {
        text : "",
        category : "All",
        company: "All",
        color : "All",
        maxPrice : 0,
        minPrice : 0,
        price : 0
    }

}

const FilterContextProvider = ({children})=>{

    const {products}= useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    // to set grid view
    const setGridView = ()=>{
        dispatch({type: "SET_GRID_VIEW"})
    }

    const setListView = ()=>{
        dispatch({type: "SET_LIST_VIEW"})
    }

   

    // sorting function
    const sorting = (event)=>{
        let userValue = event.target.value
        dispatch({type: "SET_SORT_VALUE", payload : userValue})
    }

    const updateFilterValue = (event)=>{
        let name = event.target.name
        let value = event.target.value

        return dispatch({type : "UPDATE_FILTERS_VALUE", payload : {name, value}})

    }

    const clearFilters = ()=>{
        dispatch({type: "CLEAR_FILTERS"})
    }

    // to sort the prodcuts 
    useEffect(()=>{
        dispatch({type : "FILTERS_PRODUCTS"})
        dispatch({type : "SORT_PRODUCTS"})
    }, [products, state.sorting_value, state.filters])


    // to load all products for grid and list view 
    useEffect(()=>{
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload : products})
    },[products])

    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue,clearFilters}}>
        {children}
    </FilterContext.Provider>
}

const useFilterContext = ()=>{
    return useContext(FilterContext)
}

export {FilterContext, FilterContextProvider, useFilterContext}