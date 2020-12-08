import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.scss'

import Header from './header/header.component'
import HomePage from '../pages/homepage/homepage.component'
import ShopPage from '../pages/shop/shop.component'
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={ HomePage } />
                <Route path='/shop' component={ ShopPage } />
                <Route path='/signin' component={ SignInAndSignUpPage } />
            </Switch>
        </div>
    )
}

export default App