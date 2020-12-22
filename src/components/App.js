import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.scss'

import Header from './header/header.component'
import HomePage from '../pages/homepage/homepage.component'
import ShopPage from '../pages/shop/shop.component'
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from '../pages/checkout/checkout.component'
import { selectCurrentUser } from '../redux/user/user.selector'
import { checkUserSession } from '../redux/user/user.actions'
class App extends React.Component {
    unsubscribeFromAuth = null

    componentDidMount(){
        const { checkUserSession } = this.props
        checkUserSession()
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth()
    }

    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/' exact component={ HomePage } />
                    <Route path='/shop' component={ ShopPage } />
                    <Route path='/checkout' exact component={ CheckoutPage } />
                    <Route 
                        path='/signin' 
                        exact 
                        render={()=> this.props.currentUser ?
                                    ( <Redirect to="/" /> ) 
                                    :
                                    (<SignInAndSignUpPage/>) } 
                    />
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App)