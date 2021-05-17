import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';

const Horaire = () => {
    return (
        <>
            <Header />
            <main class="main">

                <Navbar />

                <div class="main__content">

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
            <Footer />
        </>
    );
};

export default Horaire;
