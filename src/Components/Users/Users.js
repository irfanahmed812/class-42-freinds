import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User/User';
import './Users.css';

const Users = () => {

    const friends = useLoaderData()

    return (
        <div className='container pt-2'>
            <h2>Total Friends: {friends.length}</h2>
            <div className="friends py-3">
                {
                    friends.map(friend => <User key={friend.id} friend={friend}></User>)
                }
            </div>
        </div>
    );
};

export default Users;