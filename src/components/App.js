import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { GlobalStyle } from '../global.styles'

import Header from './header/header.component'
import Spinner from './spinner/spinner.component'
import { selectCurrentUser } from '../redux/user/user.selector'
import { checkUserSession } from '../redux/user/user.actions'

const HomePage = lazy(() => import('../pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('../pages/shop/shop.component'))
const SignInAndSignUpPage = lazy(() => import('../pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const CheckoutPage = lazy(() => import('../pages/checkout/checkout.component'))

const App = ({ checkUserSession, currentUser }) => {

    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

    return (
        <div>
            <GlobalStyle />
            <Header/>
            <Switch>
                <Suspense fallback={ <Spinner /> } >
                    <Route path='/' exact component={ HomePage } />
                    <Route path='/shop' component={ ShopPage } />
                    <Route path='/checkout' exact component={ CheckoutPage } />
                    <Route 
                    path='/signin' 
                    exact 
                    render={()=> currentUser ?
                                ( <Redirect to="/" /> ) 
                                :
                                (<SignInAndSignUpPage/>) } 
                    />
                </Suspense>
            </Switch>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App)