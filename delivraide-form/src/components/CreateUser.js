import React, { Component } from 'react'
import { auth, createUserDocument } from '../firebase';
import './CreateUser.css';

class CreateUser extends Component {
    state = { nom: '', prenom: '', ville: '', code_postal: 0, tel: 0, email: '', password: '', is_new: true };
    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, nom, prenom, ville, code_postal, tel, is_new } = this.state;
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password,
            );
            console.log(user);
            await createUserDocument(user, { nom }, { prenom }, { ville }, { code_postal }, { tel }, { is_new });
        } catch (error) {
            console.log('error', error);
        }
        this.setState({ nom: '', prenom: '', ville: '', code_postal: 0, tel: 0, email: '', password: '', is_new: true });
    };
    render() {
        const { nom, prenom, ville, code_postal, tel, email, password } = this.state;
        return (
            <>
                <div className="main-wrapper-flex">
                    <div className="main-wrapper-create-user">
                        <div className="form-main-wrapper">
                            <p className="form-add-user-hero-title">Ajouter un livreur</p>
                            <form className="form-wrapper" onSubmit={this.handleSubmit}>
                                <div className="form-firstname-lastname">
                                    <div className="form-last-name">
                                        <label>Nom :</label>
                                        <input type="name" name="nom" value={nom} onChange={this.handleChange} required></input>
                                    </div>
                                    <div className="form-first-name">
                                        <label>Prénom :</label>
                                        <input type="name" name="prenom" value={prenom} onChange={this.handleChange} required></input>
                                    </div>
                                </div>
                                <div className="form-city-info">
                                    <div className="form-city-name">
                                        <label>Ville :</label>
                                        <input type="text" name="ville" value={ville} onChange={this.handleChange} required></input>
                                    </div>
                                    <div className="form-zip-code">
                                        <label>Code postal :</label>
                                        <input type="number" name="code_postal" value={code_postal} onChange={this.handleChange} required></input>
                                    </div>
                                </div>
                                <div className="form-number">
                                    <label>Tél. :</label>
                                    <input type="tel" name="tel" value={tel} onChange={this.handleChange} required></input>
                                </div>
                                <div className="form-account-connexion">
                                    <div className="form-email">
                                        <label>E-mail :</label>
                                        <input type="email" name="email" value={email} onChange={this.handleChange} required></input>
                                    </div>
                                    <div className="form-password">
                                        <label>Mot de passe :</label>
                                        <input type="password" name="password" value={password} onChange={this.handleChange} required></input>
                                    </div>
                                </div>
                                <button type="submit" className="form-submit">Valider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateUser
