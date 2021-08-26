import React from "react"

import {Link} from 'react-router-dom'

export const Footer = () => (
    <footer class="footer">
        <ul>
            <Link to="#">
                <li>A Propos</li>
            </Link>
            <Link to="/address">
                <li>Adresse</li>
            </Link>
            <Link to="/horaires">
                <li>Horaire</li>
            </Link>
        </ul>
    </footer>
)