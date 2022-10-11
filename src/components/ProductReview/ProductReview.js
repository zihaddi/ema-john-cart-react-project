import React from 'react';
import './ProductReview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashRestoreAlt} from '@fortawesome/free-solid-svg-icons'
const ProductReview = ({product,loadRemove}) => {
  console.log(product)
  const {id,name,img,price,quantity} = product
  return (
    <div>
      <div className='review-design'>
      <div className='img-design'>
         <img src={img} alt="" />
      </div>
      <div className='details-design'>
           <div className='sub-details-design'>
               {name}
               <p>Price : <span className='price-color'>${price}</span></p>
               <p>Quantity : <span className='price-color'>${quantity}</span></p>
           </div>
           <div >
               <button onClick={()=>loadRemove(id)} className='rm-btn-design'><FontAwesomeIcon className='remove-design' icon={faTrashRestoreAlt} /></button>
           </div>
      </div>
    </div>
    </div>
  );
};

export default ProductReview;