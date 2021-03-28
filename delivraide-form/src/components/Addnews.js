import React from 'react'
import './AddNews.css';

function Addnews() {
    return (
        <>
            <div className="main-wrapper">
                <div className="form-main-wrapper">
                    <p className="user-list-hero-list">Publier une news</p>
                    <form className="form-wrapper">
                        <div className="form-title">
                            <label>Titre :</label>
                            <input type="text" name="when" required></input>
                        </div>
                        <p className="form-add-delivery-hero-title">Message :</p>
                        <textarea className="form-complementary-info" cols="50" rows="15" swrap="hard" pellcheck="true" name="info_comp"></textarea>
                        <button type="submit" className="form-submit">Valider</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addnews
