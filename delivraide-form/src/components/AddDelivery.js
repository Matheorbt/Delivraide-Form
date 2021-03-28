import React from 'react'
import './AddDelivery.css';

function AddDelivery() {
    return (
        <div className="main-wrapper">
            <div className="form-main-wrapper">
                <p className="form-add-delivery-hero-title">Ajouter une livraison</p>
                <form className="form-wrapper">
                    <div className="form-when-wrapper">
                        <div className="form-when">
                            <label>Quand ?</label>
                            <input type="date" name="when" required></input>
                        </div>
                        <div className="form-when-hour">
                            <label>A quelle heure ?</label>
                            <input type="time" name="password" required></input>
                        </div>
                        <div className="form-city-name">
                            <label>Ville ?</label>
                            <select className="form-city-selector" name="city">
                                <option value="Lyon">Lyon</option>
                                <option value="Montreuil">Montreuil</option>
                                <option value="Paris">Paris</option>
                                <option value="Vélizy-Villacoublay">Vélizy-Villacoublay</option>
                                <option value="Viroflay">Viroflay</option>
                                <option value="Montpellier">Montpellier</option>
                            </select>
                        </div>
                    </div>
                    <p className="form-add-delivery-hero-title">Où récupérer la commande (donateur)</p>
                    <div className="form-city-info">
                        <div className="form-first-name">
                            <label>Enseigne :</label>
                            <input type="name" name="name" required></input>
                        </div>
                        <div className="form-number">
                            <label>Tél. :</label>
                            <input type="tel" name="tel" required></input>
                        </div>
                    </div>
                    <div className="form-city-info">
                        <div className="form-city-name">
                            <label>Adresse :</label>
                            <input type="text" name="adress" required></input>
                        </div>
                        <div className="form-zip-code">
                            <label>Code postal :</label>
                            <input type="number" name="code_postal" required></input>
                        </div>
                    </div>

                    <p className="form-add-delivery-hero-title">Où livrer la commande (livreur)</p>
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
                        <div className="form-city-adress">
                            <label>Adresse :</label>
                            <input type="text" name="adress" required></input>
                        </div>
                        <div className="form-zip-code">
                            <label>Code postal :</label>
                            <input type="number" name="code_postal" required></input>
                        </div>
                    </div>

                    <div className="form-number">
                        <label>Tél. :</label>
                        <input type="tel" name="tel" required></input>
                    </div>
                    <p className="form-add-delivery-hero-title">Informations complémentaires</p>
                    <textarea maxLength="300" className="form-complementary-info" cols="50" swrap="hard" pellcheck="true"></textarea>
                    <button type="submit" className="form-submit">Valider</button>
                </form>
            </div>
        </div>
    )
}

export default AddDelivery
