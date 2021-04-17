import React from 'react'
import './AddKit.css';

function AddKit() {
    return (
        <>
            <div className="main-wrapper-flex">
                <div className="main-wrapper-create-user">
                    <div className="form-main-wrapper">
                        <p className="form-add-user-hero-title">Recevoir mon kit</p>
                        <form className="form-wrapper">
                            <div className="form-firstname-lastname">
                                <div className="form-last-name">
                                    <label>Nom :</label>
                                    <input type="name" name="nom" required></input>
                                </div>
                                <div className="form-first-name">
                                    <label>Prénom :</label>
                                    <input type="name" name="prenom" required></input>
                                </div>
                            </div>
                            <div className="form-city-info">
                                <div className="form-city-name">
                                    <label>Ville :</label>
                                    <input type="text" name="ville" required></input>
                                </div>
                                <div className="form-zip-code">
                                    <label>Code postal :</label>
                                    <input type="number" name="code_postal" required></input>
                                </div>
                            </div>
                            <div className="form-account-connexion">
                                <div className="form-number">
                                    <label>Tél. :</label>
                                    <input type="tel" name="tel" required></input>
                                </div>
                                <div className="form-email">
                                    <label>E-mail :</label>
                                    <input type="email" name="email" required></input>
                                </div>
                            </div>
                            <div class="politique-div"><input type="checkbox" id="confidentialité" name="confidentialité" required /><label for="confidentialité">J'accepte que ces informations soient <a href="/charte">enregistrées et traitées</a> par l'asssociation l'Equipage Solidaire conformément à sa <a href="/politique">politique de confidentialité</a>.</label></div>
                            <button type="submit" className="form-submit">Valider</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddKit
