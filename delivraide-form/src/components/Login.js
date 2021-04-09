import React from 'react'
import './Login.css';

function Login() {
    return (
        <>
            <div className="login-wrapper-flex">
                <div className="main-wrapper">
                    <div className="form-main-wrapper">
                        <button className="form-admin-connexion">Connexion Admin.</button>
                        <form className="form-wrapper">
                            <div className="form-email">
                                <label>E-mail :</label>
                                <input type="email" name="email" required></input>
                            </div>
                            <div className="form-password">
                                <label>Mot de passe :</label>
                                <input type="password" name="password" required></input>
                            </div>
                            <button type="submit" className="form-submit">Valider</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
