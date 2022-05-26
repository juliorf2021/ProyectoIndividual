import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div className='container m-5 text-center'>
            <h2>Usuario</h2>
            <img src={user?.photoURL} alt="" />
            <h5>Nombre : {user.displayName}</h5>
            <h5>Correo : {user.email}</h5>
        </div>
    );
};

export default UserProfile;