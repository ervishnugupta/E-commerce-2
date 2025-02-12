
const ProductReducer = (state, action) => {

    if (action.type === "SET_LOADING") {
        return { ...state, isLoading: true }
    }

    if (action.type === "API_ERROR") {
        return { ...state, isError: true, isLoading: false }
    }

    if (action.type === "SET_API_DATA") {
        const featureData = action.payload.filter((curElement) => {
            return curElement.featured === true
        })
        return { 
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureData
         }
    }

    if(action.type === "SET_SINGLE_LOADING"){
        return {...state, isSingleLoading : true}
    }

    if(action.type === "SET_SINGLE_PRODUCT"){
        return {
            ...state,
            isSingleLoading : false,
            singleProduct : action.payload
        }

    }

    if(action.type === "SET_SINGLE_ERROR"){
        return {
            ...state,
            isSingleLoading : false,
            isError : true
        }
    }
}

export default ProductReducer
