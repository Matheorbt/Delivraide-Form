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
import Application from './Application'
import Home from './Home'

function App() {
    const displayNavbar = () => {
        const navbarButton = document.querySelector(".navbar-button")
        const navbarItems = document.querySelector(".admin-navbar-items")

        navbarItems.classList.toggle('active-navbar');
    }
    return (
        <Router>
            <nav className="admin-navbar">
                <img src={logoAdmin} alt="logo admin"></img>
                <button className="navbar-button set-active" onClick={() => displayNavbar()}><i class="fa fa-bars" aria-hidden="true"></i></button>
                <ul className="admin-navbar-items active-navbar">
                    <button className="navbar-button set-unactive" onClick={() => displayNavbar()}><i class="fa fa-times" aria-hidden="true"></i></button>
                    <li>
                        <Link to="/home">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/login">Connexion</Link>
                    </li>
                    <li>
                        <Link to="/createuser">Créer un utilisateur</Link>
                    </li>
                    <li>
                        <Link to="/userlist">Liste utilisateurs</Link>
                    </li>
                    <li>
                        <Link to="/adduser">Ajouter un utilisateur</Link>
                    </li>
                    <li>
                        <Link to="/adddelivery">Ajouter une livraison</Link>
                    </li>
                    <li>
                        <Link to="/addnews">Ajouter une news</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/application">Candidature</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
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
                <Route path="/application">
                    <Application />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
