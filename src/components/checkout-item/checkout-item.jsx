import React from 'react';
import { connect } from 'react-redux'
import { clearItemFromCard, addItem, removeItem } from '../../redux/card/card.actions'

import './checkout-item.styles.scss';

const CheckoutItem = ({ cardItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cardItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={()=> removeItem(cardItem)}> &#10094; </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cardItem)}> &#10095; </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cardItem) }>&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCard(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
