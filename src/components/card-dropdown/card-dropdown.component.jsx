import React from 'react'

import './card-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

const CardDropdown = () => {
    return(
        <div className="card-dropdown">
            <div className="card-items" />
            <CustomButton > GO TO CHECKOUT </CustomButton>
        </div>
    )
}

export default CardDropdown
