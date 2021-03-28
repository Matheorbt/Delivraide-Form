import React, { Component } from 'react'
import { firestoreAutoId, createDelivery } from '../firebase';
import './AddDelivery.css';

class AddDelivery extends Component {
    state = { id: firestoreAutoId(), when: '', whath: '', from: 0, to: 0, to_adress: '', to_tel: 0, name: '', to_name: '', name2: '', tel: 0, adress: '', info_comp: '', taken: false, taken_by: "X", city: '' };
    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        const { id, when, whath, from, to, to_adress, to_tel, name, to_name, name2, tel, adress, info_comp, taken, taken_by, city } = this.state;
        try {
            await createDelivery({ id }, { when }, { whath }, { from }, { to }, { to_adress }, { to_tel }, { name }, { to_name }, { name2 }, { tel }, { adress }, { info_comp }, { taken }, { taken_by }, { city });
        } catch (error) {
            console.log('error', error);
        }
        this.setState({ id: firestoreAutoId(), when: '', whath: '', from: 0, to: 0, to_adress: '', to_tel: 0, name: '', to_name: '', name2: '', tel: 0, adress: '', info_comp: '', taken: false, taken_by: "X", city: '' });
    };
    render() {
        const { when, whath, from, to, to_adress, to_tel, name, to_name, name2, tel, adress, info_comp, taken, taken_by, city } = this.state;
        return (
            <div className="main-wrapper">
                <div className="form-main-wrapper">
                    <p className="form-add-delivery-hero-title">Ajouter une livraison</p>
                    <form className="form-wrapper" onSubmit={this.handleSubmit}>
                        <div className="form-when-wrapper">
                            <div className="form-when">
                                <label>Quand ?</label>
                                <input type="date" name="when" value={when} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-when-hour">
                                <label>A quelle heure ?</label>
                                <input type="time" name="whath" value={whath} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-city-name">
                                <label>Ville ?</label>
                                <select className="form-city-selector" name="city" value={city} onChange={this.handleChange}>
                                    <option value="Lyon" onChange={this.handleChange}>Lyon</option>
                                    <option value="Montpellier" onChange={this.handleChange}>Montreuil</option>
                                    <option value="Paris" onChange={this.handleChange} >Paris</option>
                                    <option value="Vélizy-Villacoublay" onChange={this.handleChange}>Vélizy-Villacoublay</option>
                                    <option value="Viroflay" onChange={this.handleChange}>Viroflay</option>
                                </select>
                            </div>
                        </div>
                        <p className="form-add-delivery-hero-title">Où récupérer la commande (donateur)</p>
                        <div className="form-city-info">
                            <div className="form-first-name">
                                <label>Enseigne :</label>
                                <input type="name" name="to_name" value={to_name} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-number">
                                <label>Tél. :</label>
                                <input type="tel" name="to_tel" value={to_tel} onChange={this.handleChange} required></input>
                            </div>
                        </div>
                        <div className="form-city-info">
                            <div className="form-city-name">
                                <label>Adresse :</label>
                                <input type="text" name="to_adress" value={to_adress} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-zip-code">
                                <label>Code postal :</label>
                                <input type="number" name="to" value={to} onChange={this.handleChange} required></input>
                            </div>
                        </div>

                        <p className="form-add-delivery-hero-title">Où livrer la commande (livreur)</p>
                        <div className="form-firstname-lastname">
                            <div className="form-last-name">
                                <label>Nom :</label>
                                <input type="name" name="name" value={name} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-first-name">
                                <label>Prénom :</label>
                                <input type="name" name="name2" value={name2} onChange={this.handleChange} required></input>
                            </div>
                        </div>
                        <div className="form-city-info">
                            <div className="form-city-adress">
                                <label>Adresse :</label>
                                <input type="text" name="adress" value={adress} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-zip-code">
                                <label>Code postal :</label>
                                <input type="number" name="from" value={from} onChange={this.handleChange} required></input>
                            </div>
                        </div>

                        <div className="form-number">
                            <label>Tél. :</label>
                            <input type="tel" name="tel" value={tel} onChange={this.handleChange} required></input>
                        </div>
                        <p className="form-add-delivery-hero-title">Informations complémentaires</p>
                        <textarea maxLength="300" className="form-complementary-info" cols="50" swrap="hard" pellcheck="true" name="info_comp" value={info_comp} onChange={this.handleChange}></textarea>
                        <button type="submit" className="form-submit">Valider</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddDelivery