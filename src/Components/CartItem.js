import React from 'react'
import FormatPrice from '../Helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { FaTrashAlt } from "react-icons/fa";
import { useCartContext } from '../Context/Cart_Context';

const CartItem = ({item}) => {
    const {id, name, color, amount, price, image} = item
    const {removeItem, setDec, setInc} = useCartContext()
    
    // const setDec = ()=>{
    //     // amount > 1 ? setAmount(amount-1) : setAmount(1)
    // }

    // const setInc = ()=>{
    //     // amount < stock ? setAmount(amount+1) : setAmount(stock)
    // }

  return (
    <div className='cart_heading grid grid-five-column'>
        <div className="cart-image--name">
            <figure>
                <img src={image} alt={name} />
            </figure>

            <div>
            <p>{name}</p>
            <div className="color-div">
                <p>color:</p>
                <div className='color-style' style= {{backgroundColor : color}}></div>
            </div>
        </div>
        </div>

        {/* price */}

        <div className="cart-hide">
            <p><FormatPrice price={price} /></p>
        </div>

        {/* Quantity */}

        <CartAmountToggle amount={amount} setInc={()=>setInc(id)} setDec={()=>setDec(id)}/>

        {/* Subtotal */}

        <div className="cart-hide">
            <p><FormatPrice price={price*amount} /></p>
        </div>
        
        {/* Remove icon  */}

        <div >
        <FaTrashAlt className="remove_icon" onClick={()=>removeItem(id)} />
        </div>
      
    </div>
  )
}

export default CartItem
