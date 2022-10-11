import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Cart.css'
const Cart = ({cart,loadRefreshCart}) => {
 //console.log(cart)
 const location = useLocation()
 console.log(location.pathname)
 let quantity = 0
 let total = 0;
 let shipping = 0
   for(const p of cart)
   {
     quantity = quantity + p.quantity
     total = total + (p.price*p.quantity)
     shipping = shipping + (p.shipping*p.quantity)
   }
   
 let tax = total*.1;
 let grandTotal = total+shipping+tax
  return (
    <div className='cart-design'>
      <h3>Order Summary</h3>
      <p>Selected item : {quantity}</p>
      <p>total = ${total}</p>
      <p>Shipping = ${shipping}</p>
      <p>Tax = ${tax.toFixed(2)}</p>
      <p>Grandtotal = ${grandTotal.toFixed(2)}</p>
      {location.pathname === '/shop'? <Link className='link-design' to='/orders'>See Details</Link>:<Link className='link-design' to='/shop'>Go Back</Link>}
      {location.pathname === '/shop'?   <button onClick={loadRefreshCart} className='btn-designn'>Refresh Cart</button>:""}
    
    </div>
  );
};

export default Cart;