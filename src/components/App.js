import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.scss'

import HomePage from '../pages/homepage/homepage.component'

const App = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={ HomePage } />
            </Switch>
        </div>
    )
}

export default App