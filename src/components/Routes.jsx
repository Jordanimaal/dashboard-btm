import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Signelements from '../pages/Signalements'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/signalements' component={Signelements} />
        </Switch>
    )
}

export default Routes
