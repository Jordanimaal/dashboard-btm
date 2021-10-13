import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Harassment from '../pages/Harassment'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/harassment' component={Harassment} />
        </Switch>
    )
}

export default Routes
