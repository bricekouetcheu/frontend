import React from 'react';

import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav class="main__sidebar">
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/album">
                    <li>Galerie</li>
                </NavLink>
                <NavLink to="/blog">
                    <li>Blog</li>
                </NavLink>
                <NavLink to="/projet">
                    <li>Projet Pedaogogique</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul>
            <NavLink to="/login" class="btn-sidebar">
                <button type="button" class="btn-orange btn-orange-width100">Connexion</button>
            </NavLink>
        </nav>
    );
};

export default Navbar;