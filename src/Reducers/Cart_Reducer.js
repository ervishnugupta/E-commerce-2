
const Cart_Reducer = (state, action) => {

    if(action.type === "ADD_TO_CART"){
        const {id, color, amount , product} = action.payload
        // console.log(product);

        // tackle the exsiting product 
        let exsitingProduct = state.cart.find((currElem)=>{
            return currElem.id === id + color  //user ne jo click kiya us produt ka color and id
        })

        if(exsitingProduct){
            let updatedProduct = state.cart.map((currElem)=>{

                if(currElem.id === id+color){
                    let newAmount = currElem.amount + amount
                    if(newAmount >= currElem.max){
                        newAmount = currElem.max
                    }
                    return {
                        ...currElem,
                        amount : newAmount
                    }
                }else{
                    return currElem
 
                }

            })

            return {
                ...state,
                cart : updatedProduct
            }

        }else{

            let cartProduct;

            cartProduct =  {
            id : id + color,
            name : product.name,
            amount,
            color,
            image : product.image[0].url,
            price : product.price,
            max : product.stock
        }

        return {
            ...state,
            cart : [...state.cart, cartProduct]

        }
        }
  
    }

    if(action.type === "SET_DECREMENT"){
        let updatedProduct = state.cart.map((currElem)=>{
            if(currElem.id === action.payload){
                let decAmount = currElem.amount - 1
                if(decAmount <= 1){
                    decAmount = 1
                }
                
                return {
                    ...currElem,
                    amount : decAmount
                }
            }else{
                return currElem
            }

            
        })

        return {
            ...state,
            cart : updatedProduct
        }
    }

    if(action.type === "SET_INCREMENT"){
        let updatedProduct = state.cart.map((currElem)=>{
            if(currElem.id === action.payload){
                let incAmount = currElem.amount + 1
                if(incAmount >= currElem.max){
                    incAmount = currElem.max
                }

                return {
                    ...currElem,
                    amount : incAmount
                }
            }else{
                return currElem
            }

            
        })

        return {
            ...state,
            cart : updatedProduct
        }
    }

    if(action.type === "CART_TOTAL_ITEM"){
        let updatedItemVal = state.cart.reduce((initialVal, currVal)=>{
            let {amount} = currVal
            initialVal = initialVal + amount;
            return initialVal
        }, 0)

        return {
            ...state,
            total_items : updatedItemVal,
        }
    }

    if(action.type === "REMOVE_ITEM"){
    //    const {id} = action.payload
        const {cart} = state

        let updatedCart = cart.filter((currItem)=>{
            return currItem.id !== action.payload
        })

        return {
            ...state,
            cart : updatedCart
        }
    }

    // to clear a cart 
    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart : []
        }
    }

    if(action.type === "SET_CART_TOTALPRICE"){
        let total_Price = state.cart.reduce((initialVal, currElem)=>{
            let {price, amount} = currElem
            initialVal = initialVal + (price*amount)
            return initialVal
        }, 0)

        return {
            ...state,
            total_price : total_Price
        }
    }

  return state
 
}

export default Cart_Reducer
