import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'


const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-field'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Street' />
        
        <div className='multi-field'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-field'>
          <input type="text" placeholder='Pin Code' />
          <input type="text" placeholder='Country' />
        </div>
        
        <input type="text" placeholder='Phone' />
        {/* <input type="text" placeholder='State' /> */}
      </div>
      
      <div className="place-order-right">
      <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fees</p>
              <p>Rs. {getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>Rs. {getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
            </div>
          </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )


}

export default PlaceOrder