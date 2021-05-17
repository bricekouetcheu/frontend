import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

import Navbar from '../components/navbar';

const Adresse = () => {
    return (
        <>
            <Header />
            <main class="main">

                <Navbar />

                <div class="main__content">

                    <div class="adresse">
                        <h2 class="second-title mb-4">Adresse</h2>

                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="adresse__item">
                                    <img src="images/icon/video.svg" alt="icone" />
                                    <h3 class="second-title">Téléphone</h3>
                                    <p>+2250101010101</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="adresse__item">
                                    <img src="images/icon/video.svg" alt="icone" />
                                    <h3 class="second-title">E-mail</h3>
                                    <p>lionceaux@gmail.com</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="adresse__item">
                                    <img src="images/icon/video.svg" alt="icone" />
                                    <h3 class="second-title">Adresse</h3>
                                    <p>France - Parie/Rue de xxxxxxxxx</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Adresse;
