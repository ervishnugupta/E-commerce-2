
const Filter_Reducer = (state, action) => {

    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            
            let priceArr = action.payload.map((currElem)=>{
                return currElem.price
            })
            // console.log(priceArr);
            
// 1st way to find max price 
            // console.log(Math.max.apply(null, priceArr));

// 2nd way 
            // let maxPrice = priceArr.reduce((initialVal, currVal)=>
            //      Math.max(initialVal, currVal)
            // ,priceArr[0])  
            
            // console.log(maxPrice);
// 3rd way  

            let maxPrice =  priceArr.length > 0 ? Math.max(...priceArr) : 0;
            // console.log(maxPrice);
            const {products} = action.payload
            
            return {
                ...state,
                filter_products : [products],
                all_products : [...action.payload],
                filters : {
                    ...state.filters,
                    maxPrice : maxPrice,
                    price : maxPrice
                }
            }

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view : true
            }  

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view : false
            } 
            
        case "SET_SORT_VALUE": 
            // let userSortValue = document.getElementById('sort')
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value
            // console.log(sort_value);
            
            return {
                ...state,
                sorting_value : action.payload,
            }  
            
        case "SORT_PRODUCTS":

            let newSortData;
            const {filter_products, sorting_value} = state
            let tempSortProduct = [...filter_products]

            // if(state.sorting_value === "lowest"){
            //     newSortData = tempSortProduct.sort((a,b)=>
            //         a.price - b.price
            //     )
            // }

            // if(state.sorting_value === "highest"){
            //     newSortData = tempSortProduct.sort((a,b)=>
            //         b.price - a.price
            //     )
            // }

            // if(state.sorting_value === "a-z"){
            //     newSortData = tempSortProduct.sort((a,b)=>
            //         a.name.localeCompare(b.name)
                
            //     )
            // }
            // if(state.sorting_value === "z-a"){
            //     newSortData = tempSortProduct.sort((a,b)=>{
                    
            //            return b.name.localeCompare(a.name)
                
            //     })
            // }

            const sortingProducts = (a,b)=>{
                if(sorting_value === "lowest"){
                    return a.price - b.price
                }

                if(sorting_value === "highest"){
                    return b.price - a.price
                }

                if(sorting_value === "a-z"){
                    return a.name.localeCompare(b.name)
                }

                if(sorting_value === "z-a"){
                    return b.name.localeCompare(a.name)
                }

            }

            newSortData = tempSortProduct.sort(sortingProducts)
        

            return {
                ...state,
                filter_products : newSortData,
            } 
            
        case "UPDATE_FILTERS_VALUE" :
            const {name, value} = action.payload  
            return {
                ...state,
                filters : {
                    ...state.filters,
                    [name] : value
                }

            } 

        case "FILTERS_PRODUCTS": 
            let {all_products} = state
            let tempFilterProducts = [...all_products]

            const {text, category, company, color, price} = state.filters
            if(text){
                tempFilterProducts = tempFilterProducts.filter((currElem)=>{
                    return currElem.name.toLowerCase().includes(text)
                })
            }

            if(category !== "All"){
                tempFilterProducts = tempFilterProducts.filter((currElem)=>{
                    return currElem.category === category
                })
            }

      
            if (company !== "All") {
                tempFilterProducts =tempFilterProducts.filter((currElem)=>{
                    return currElem.company === company
                })
            }

            if(color !== "All"){
                tempFilterProducts = tempFilterProducts.filter((currElem)=>{
                    return currElem.colors.includes(color)
                })
            }

            if(price === 0){
                tempFilterProducts = tempFilterProducts.filter((currElem)=>{
                    return currElem.price === price
                })
            }else {
                tempFilterProducts = tempFilterProducts.filter((currElem)=>{
                    return currElem.price <= price
                })
            }
            
            return {
                ...state,
                filter_products : tempFilterProducts
            }

        
        case "CLEAR_FILTERS": 

            return {
                    ...state,
                    filters : {
                        ...state.filters,
                        text : "",
                        category : "All",
                        company: "All",
                        color : "All",
                        maxPrice : state.filters.maxPrice,
                        minPrice : state.filters.minPrice,
                        price : state.filters.maxPrice
                    }
                }
    


        default :
        return state    
    }
}

export default Filter_Reducer
