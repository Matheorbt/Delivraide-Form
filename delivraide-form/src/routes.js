import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './components/Login';
import AddUser from './components/AddUser';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

export default (
    <Route path="/" component={Login}>
        <IndexRoute component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/adduser" component={AddUser} />
        <Route path="/createuser" component={CreateUser} />
        <Route path="/userlist" component={UserList} />
    </Route>
);