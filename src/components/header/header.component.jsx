import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import { createStructuredSelector } from 'reselect'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { selectCardHidden } from '../../redux/card/card.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

import CardIcon from '../card-icon/card-icon.component'
import CardDropdown from '../card-dropdown/card-dropdown.component'

const Header = ({ currentUser, hidden }) => {
    return(
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link to="/shop" className="option"> SHOP </Link>
                <Link to="/shop" className="option"> CONTACT </Link>
                {
                    currentUser ? 
                    <div className="option" onClick={()=> auth.signOut()}> SIGN OUT </div>
                    : 
                    <Link to="/signin" className="option"> SIGN IN </Link>
                }
                <CardIcon /> 
            </div>
            {
                hidden ?
                null :
                <CardDropdown />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
     currentUser: selectCurrentUser,
     hidden: selectCardHidden
})

export default connect(mapStateToProps)(Header)