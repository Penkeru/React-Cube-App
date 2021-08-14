import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './pages/login/login';
import Box from './pages/box/box';
import Settings from './pages/settings/settings';

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Redirect exact to='/welcome' />
            </Route>
            <Route path='/welcome' component={Login}/>
            <Route path='/box' component={Box} />
            <Route path='/settings' component={Settings} />
        </Switch>
    );
};

export default MainRoutes;