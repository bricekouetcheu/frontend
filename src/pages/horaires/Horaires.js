import React, { Component } from 'react';


//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'


class Horaires extends Component {
    render() {
        return (
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                <main className="main">
                    <Sidebar />
                    <div class="main__content">
                    {/* <!-- Horaire --> */}
                    <div class="horaire">
                        <h2 class="second-title mb-5">Horaire</h2>
                        <div class="table-responsive horaire-table">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Lundi</th>
                                        <th scope="col">Mardi</th>
                                        <th scope="col">Mercredi</th>
                                        <th scope="col">Jeudi</th>
                                        <th scope="col">Vendredi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Horaire</th>
                                        <td>07h30 à 17h30</td>
                                        <td>07h30 à 17h30</td>
                                        <td>07h30 à 17h30</td>
                                        <td>07h30 à 17h30</td>
                                        <td>07h30 à 17h30</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Matin</th>
                                        <td>07h30 à 12h00</td>
                                        <td>07h30 à 12h00</td>
                                        <td>07h30 à 12h00</td>
                                        <td>07h30 à 12h00</td>
                                        <td>07h30 à 12h00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Soir</th>
                                        <td>14h00 à 17h30</td>
                                        <td>14h00 à 17h30</td>
                                        <td>14h00 à 17h30</td>
                                        <td>14h00 à 17h30</td>
                                        <td>14h00 à 17h30</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Horaires;