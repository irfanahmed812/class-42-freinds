import React from 'react';
import './User.css';
import { NavLink } from 'react-router-dom';

const User = ({ friend }) => {

    const { name, username, email, website, id } = friend;

    return (
        <div className='friend'>
            <h4>{name}</h4>
            <h6>Email: {email}</h6>
            <h6>Website: {website}</h6>
            <h6>Handle: <NavLink to={`/friend/${id}`}>@{username}</NavLink></h6>
        </div>
    );
};

export default User;