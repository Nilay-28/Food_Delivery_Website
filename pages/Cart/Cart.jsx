import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if(cartItems[item._id]>0) {
            return(
              <>
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt='' />
                <p>{item.name}</p>
                <p>Rs. {item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs. {item.price*cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr />
              </>
            )
            }
        })}
      </div>
      <div className='cart-bottom'>
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
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promo'>
          <div>
            <p>Enter PromoCode</p>
            <div className='cart-promo-input'>
              <input type='text' placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart