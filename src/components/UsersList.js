import React from 'react';

const UsersList = ({users, deleteUser, selectUser}) => {
    return (
        <ul className="users-list-container">
            <h3 className='title-list'>Users</h3>
            {
                users.map(user =>(
                    <li className='li-users' key={user.id}>
                        <div className='user-info-container'>
                            <h4 className='user-name-container'>{user.first_name} {user.last_name}</h4>
                            <p className='p-identificatoer'>Email</p>
                            <p>{user.email}</p>
                            <p className='p-identificatoer'>Birthday</p>
                            <p> <i className='bx bx-gift'></i> {user.birthday}</p>
                        </div>

                        <div className='btn-container'>
                            <button className='btn-delete' onClick={() => deleteUser(user.id)}>
                                <i className='bx bx-trash'></i>
                            </button>
                            <button className="btn-edit" onClick={()=>selectUser(user)}>
                                <i className='bx bx-pencil'></i>
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;