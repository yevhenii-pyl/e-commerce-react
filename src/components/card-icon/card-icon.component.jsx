import React from 'react'
import { connect } from 'react-redux'

import { toggleCardHidden } from '../../redux/card/card.actions'

import './card-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CardIcon = ({ toggleCardHidden }) => {
    return (
        <div className="card-icon" onClick={toggleCardHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps= dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})

export default connect(null, mapDispatchToProps)(CardIcon)