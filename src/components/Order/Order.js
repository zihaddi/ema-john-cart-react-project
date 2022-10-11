import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ProductReview from '../ProductReview/ProductReview';
import './Order.css'
const Order = () => {
  const {products,previousCart} = useLoaderData() 
  const [cart,setCart] = useState(previousCart)

  const loadRemove= (id)=>{
      const filteredProduct =cart.filter(product => product.id !== id)
      setCart(filteredProduct)
      removeFromDb(id)
  }
  return (
    <div className='shop-conatiner'>
     <div className='order-product-container'>
       {
        cart.map(product => <ProductReview key={product.id} loadRemove={loadRemove} product={product}></ProductReview>)
       }
     </div>
     <div className='cart-container'>
      {
        <Cart  cart={cart}></Cart>
      }
     </div>
    </div>
  );
};

export default Order;