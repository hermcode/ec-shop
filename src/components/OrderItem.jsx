import React, { useContext } from 'react';
import CloseIcon from '@icons/icon_close.png'
import '@styles/OrderItem.scss';
import AppContext from '../context/AppContext';

const OrderItem = ({product, index}) => {

  const { removeFromCart } = useContext(AppContext)

  const handleRemoveFromCart = (indexValue) => {
    removeFromCart(indexValue)
  }

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title}/>
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img 
        src={CloseIcon} 
        className="OrderItem-close-icon" 
        alt="close" 
        onClick={() => handleRemoveFromCart(index)}
      />
    </div>
  );
}

export default OrderItem;
