import React, { useContext } from 'react'
import './Placeholder.css'
import { StoreContext } from '../../Context/StoreContext'

const Placeholder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
       <p className="title">Delivery Infromation</p>
       <div className="multi-fields">
         <input type="text" placeholder='First name' />
         <input type="text" placeholder='Last one' />
       </div>
       <input type="email" placeholder='Email address' />
       <input type="text" placeholder='Street' />
       <div className="multi-fields">
         <input type="text" placeholder='City' />
         <input type="text" placeholder='State' />
       </div>
       <div className="multi-fields">
         <input type="text" placeholder='Zip code' />
         <input type="text" placeholder='Country' />
       </div>
       <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
              </div>
            <hr/>
            <div className="cart-total-details">
               <p>Delivery Fee</p>
               <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr/>
            <div className="cart-total-details">
               <b>Total</b>
               <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeholder