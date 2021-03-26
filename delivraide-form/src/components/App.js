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

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/createuser">create user</Link>
                        </li>
                        <li>
                            <Link to="/userlist">user list</Link>
                        </li>
                        <li>
                            <Link to="/adduser">Add user</Link>
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
                </Switch>
            </div>
        </Router>
    )
}

export default App
