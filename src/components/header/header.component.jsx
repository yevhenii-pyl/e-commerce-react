import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { selectCardHidden } from '../../redux/card/card.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { signOutStart } from '../../redux/user/user.actions'

import CardIcon from '../card-icon/card-icon.component'
import CardDropdown from '../card-dropdown/card-dropdown.component'

const Header = ({ currentUser, hidden, signOutStart }) => {
    return(
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to="/shop" > SHOP </OptionLink>
                {
                    currentUser ? 
                    <OptionLink as='div' onClick={signOutStart}> SIGN OUT </OptionLink>
                    : 
                    <OptionLink to="/signin" > SIGN IN </OptionLink>
                }
                <CardIcon /> 
            </OptionsContainer>
            {
                hidden ?
                null :
                <CardDropdown />
            }
        </HeaderContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

const mapStateToProps = createStructuredSelector({
     currentUser: selectCurrentUser,
     hidden: selectCardHidden
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)