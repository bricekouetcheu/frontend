import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { NavLink } from 'react-router-dom';

import { logout } from "../actions/auth";

const Header = () => {

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };

    return (

        <header class="header">
            <div class="header__logo">
                <img src="images/logo-nan.png" alt="logo site" />
            </div>
            <div class="header__title">
                <h1>Crèche les lionceaux</h1>
            </div>
            {currentUser ? (
                <div class="header__btn">
                    <NavLink to="/login"><button type="button" class="btn-orange border-orange-header" onClick={logOut}>Déconnexion</button></NavLink>
                </div>
            ) : (
                <div class="header__btn">
                    <NavLink to="/login"><button type="button" class="btn-orange border-orange-header">Connexion</button></NavLink>
                </div>
            )}
            <button type="button" class="btn-menu">
                <img src="images/icon/menu.svg" alt="" />
            </button>
        </header>

    );
};

export default Header;