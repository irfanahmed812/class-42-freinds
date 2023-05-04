import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {

    const friendDetails = useLoaderData();

    const { name, username, email, website, address, company, phone } = friendDetails;

    return (
        <div>
            <div className="container pt-2">
                <h3>'{name}' information:</h3>
                <div className="py-3 d-flex justify-content-center">
                    <div className="friend-details">
                        <h5>Name: {name}</h5>
                        <h6>Email: {email}</h6>
                        <h6>UserName: {username}</h6>
                        <h6>Address: {address.street}</h6>
                        <h6>Phone: {phone}</h6>
                        <h6>Company: {company.name}</h6>
                        <h6>Webiste: {website}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;