import React from 'react'
import './User.css';

function User(props) {
    const { firstName, lastName, UID } = props;
    return (
        <>
            <div className="user">
                <p className="user-list first-name">{firstName}</p>
                <p className="user-list last-name">{lastName}</p>
                <p className="user-list uid">{UID}</p>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
        </>
    )
}

export default User
