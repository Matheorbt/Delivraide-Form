import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Login from './Login'
import CreateUser from './CreateUser'
import UserList from './UserList'
import AddUser from './AddUser'
import AddDelivery from './AddDelivery'
import Addnews from './Addnews'
import logoAdmin from '../props/img/logo.png'
import Dashboard from './Dashboard'

function App() {
    return (
        <Router>
            <nav className="admin-navbar">
                <img src={logoAdmin} alt="logo admin"></img>
                <ul className="admin-navbar-items">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/createuser">Create user</Link>
                    </li>
                    <li>
                        <Link to="/userlist">User list</Link>
                    </li>
                    <li>
                        <Link to="/adduser">Add user</Link>
                    </li>
                    <li>
                        <Link to="/adddelivery">Add Delivery</Link>
                    </li>
                    <li>
                        <Link to="/addnews">Add News</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/createuser">
                    <CreateUser />
                </Route>
                <Route path="/userlist">
                    <UserList />
                </Route>
                <Route path="/adduser">
                    <AddUser />
                </Route>
                <Route path="/adddelivery">
                    <AddDelivery />
                </Route>
                <Route path="/addnews">
                    <Addnews />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
