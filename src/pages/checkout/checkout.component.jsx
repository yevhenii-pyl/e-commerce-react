import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import { selectCardItems, selectCardTotal } from '../../redux/card/card.selectors'

import './checkout.styles.scss'

const CheckoutPage = ({ cardItems, total }) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cardItems.map(cardItem => 
                    <CheckoutItem key={ cardItem.id } cardItem={cardItem}/>
                    )
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
             *Please use the following test credit card for payments*
             < br />
             4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cardItems: selectCardItems,
    total: selectCardTotal
})

export default connect(mapStateToProps)(CheckoutPage)