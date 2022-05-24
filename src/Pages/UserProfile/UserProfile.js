import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div className='container m-5 text-center'>
            <img src={user?.photoURL} alt="" />
            <h1>Name : {user.displayName}</h1>
            <h1>Name : {user.email}</h1>
        </div>
    );
};

export default UserProfile;