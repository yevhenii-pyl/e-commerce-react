import React, { useState } from 'react'
import { connect } from 'react-redux'

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';

import { addItem } from '../../redux/card/card.actions'


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    const [text, setText] = useState('ADD TO CART')


    return (
      <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => {
          addItem(item)
          setText('ITEM ADDED')
        }} inverted>
          {text}
        </AddButton>
      </CollectionItemContainer>
    );
  };
  

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)