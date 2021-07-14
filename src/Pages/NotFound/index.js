import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home'

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Désolé cette page n'existe pas !</h3>
                <NavLink exact to='/'>
                    <i> <HomeIcon/> </i>
                    <span>Acceuil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;