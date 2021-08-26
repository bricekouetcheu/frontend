import React, { Component } from 'react';


import { Link } from "react-router-dom"

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

            </nav>
        );
    }
}

export default Sidebar;