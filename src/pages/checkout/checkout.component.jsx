import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import { selectCardItems, selectCardTotal } from '../../redux/card/card.selectors'

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.styles';
  
const CheckoutPage = ({ cardItems, total }) => {
    return(
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>

                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>

                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>

                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>

                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cardItems.map(cardItem => 
                    <CheckoutItem key={ cardItem.id } cardItem={cardItem}/>
                    )
            }
            <TotalContainer>
                <span>TOTAL: ${total}</span>
            </TotalContainer>
            <WarningContainer>
             *Please use the following test credit card for payments*
             < br />
             4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </WarningContainer>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cardItems: selectCardItems,
    total: selectCardTotal
})

export default connect(mapStateToProps)(CheckoutPage)