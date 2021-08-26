import React, { Component } from 'react';


//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'


//Images
import Video from '../../assets/images/icon/video.svg'


class Address extends Component {
    render() {
        return (
            <div className="body-name">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                <main className="main">
                    <Sidebar/>
                    <div class="main__content">
                    {/* <!-- adresse --> */}
                    <div class="adresse">
                        <h2 class="second-title mb-4">Adresse</h2>

                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="adresse__item">
                                    <img src={Video} alt="icone" />
                                    <h3 class="second-title">Téléphone</h3>
                                    <p>+2250101010101</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="adresse__item">
                                    <img src={Video} alt="icone" />
                                    <h3 class="second-title">E-mail</h3>
                                    <p>lionceaux@gmail.com</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="adresse__item">
                                    <img src={Video} alt="icone" />
                                    <h3 class="second-title">Adresse</h3>
                                    <p>France - Parie/Rue de xxxxxxxxx</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </main>
                <Footer/>
            </div>
        );
    }
}

export default Address;