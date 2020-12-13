import React from 'react'
import { connect } from 'react-redux'

import { toggleCardHidden } from '../../redux/card/card.actions'

import './card-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCardItemsCount } from '../../redux/card/card.selectors'

const CardIcon = ({ toggleCardHidden, itemCount }) => {
    return (
        <div className="card-icon" onClick={toggleCardHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count"> { itemCount } </span>
        </div>
    )
}

const mapDispatchToProps= dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})

const mapStateToProps = state => ({
    itemCount: selectCardItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon)