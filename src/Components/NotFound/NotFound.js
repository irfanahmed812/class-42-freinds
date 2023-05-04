import React from 'react';
import notfound from './not-found.png';
import Header from '../../Shared/Header/Header';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className="not-found">
                <img src={notfound} alt="" />
                <h4>&#9888; Please go to home page &#9888;</h4>
            </div>
        </div>
    );
};

export default NotFound;