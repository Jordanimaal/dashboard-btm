import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Signelements from '../pages/Signalements'
import Graph from '../pages/Graph'
import Abo from '../pages/Abo'
import { Form } from '../pages/Form'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/signalements' component={Signelements} />
            <Route path='/graph' component={Graph} />
            <Route path='/abo' component={Abo} />
            <Route path='/form' component={Form}/>
        </Switch>
    )
}

export default Routes
