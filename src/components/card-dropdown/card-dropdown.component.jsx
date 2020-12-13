import React from 'react'
import { connect } from 'react-redux'

import './card-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import CardItem from '../card-item/card-item.component'
import { selectCardItems } from '../../redux/card/card.selectors'

const CardDropdown = ({ cardItems }) => {
    return(
        <div className="card-dropdown">
            <div className="card-items" > 
            {
                cardItems.map(cardItem => <CardItem key={cardItem.id} item={cardItem} />)
            }
            </div>
            <CustomButton > GO TO CHECKOUT </CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cardItems: selectCardItems(state)
})

export default connect(mapStateToProps, null)(CardDropdown)
