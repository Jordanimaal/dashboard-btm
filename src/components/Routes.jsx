import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Signelements from '../pages/Signalements'
import Graph from '../pages/Graph'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/signalements' component={Signelements} />
            <Route path='/graph' component={Graph} />
        </Switch>
    )
}

export default Routes
