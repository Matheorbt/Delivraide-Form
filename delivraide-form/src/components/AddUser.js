import React from 'react'
import './AddUser.css';

function AddUser() {
    return (
        <>
            <div className="main-wrapper">
                <div className="form-main-wrapper">
                    <p className="form-add-user-hero-title">Ajouter un utilisateur</p>
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
        </>
    )
}

export default AddUser
