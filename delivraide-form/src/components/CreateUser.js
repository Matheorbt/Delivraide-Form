import React from 'react'
import './CreateUser.css';

function CreateUser() {
    return (
        <>
            <div className="main-wrapper-create-user">
                <div className="form-main-wrapper">
                    <p className="form-add-user-hero-title">Ajouter un utilisateur</p>
                    <form className="form-wrapper">
                        <div className="form-firstname-lastname">
                            <div className="form-last-name">
                                <label>Nom :</label>
                                <input type="name" name="last-name" required></input>
                            </div>
                            <div className="form-first-name">
                                <label>Prénom :</label>
                                <input type="name" name="first-name" required></input>
                            </div>
                        </div>
                        <div className="form-city-info">
                            <div className="form-city-name">
                                <label>Ville :</label>
                                <input type="text" name="city-name" required></input>
                            </div>
                            <div className="form-zip-code">
                                <label>Code postal :</label>
                                <input type="number" name="city-zip" required></input>
                            </div>
                        </div>
                        <div className="form-number">
                            <label>Tél. :</label>
                            <input type="tel" name="phone-number" required></input>
                        </div>
                        <button type="submit" className="form-submit">Valider</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateUser
