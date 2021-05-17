import React from 'react';

import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <ul>
                    <NavLink to="/propos">
                        <li>A Propos</li>
                    </NavLink>
                    <NavLink to="/adresse">
                        <li>Adresse</li>
                    </NavLink>
                    <NavLink to="/horaire">
                        <li>Horaire</li>
                    </NavLink>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;