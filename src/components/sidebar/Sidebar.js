import React, { Component } from 'react';


import { Link, NavLink } from "react-router-dom"

class Sidebar extends Component {
    render() {
        return (
            <nav class="main__sidebar">
                <ul>
                    <Link to="/">
                        <li>Accueil</li>
                    </Link>
                    <Link to="/agenda">
                        <li>Agenda</li>
                    </Link>
                    <Link to="/albums">
                        <li>Galerie</li>
                    </Link>
                    <Link to="/blog">
                        <li>Blog</li>
                    </Link>

                    <Link to="/activity">
                        <li>Activité</li>
                    </Link>
                    <Link to="/contacts">
                        <li>Contact</li>
                    </Link>
                </ul>
                <a href="#" class="btn-sidebar">
                    <button type="button" class="btn-orange btn-orange-width100">Connexion</button>
                </a>
            </nav>
        );
    }
}

export default Sidebar;