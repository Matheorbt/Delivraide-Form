import React from 'react'
import './UserList.css';
import User from './User'
import { userListArray } from '../userList/UserListArray'

function UserList() {
    return (
        <React.Fragment>
            <div className="user-list-main-wrapper">
                <section className="user-list-table-wrapper">
                    <p className="user-list-hero-list">Liste utilisateur</p>
                    <div className="user-list-table">
                        {userListArray.map((user) => {
                            return (
                                <>
                                    <User key={user.id} {...user} />
                                </>
                            )
                        })}
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default UserList
