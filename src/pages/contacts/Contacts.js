import React, { Component } from 'react';



//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'


import UserImg from '../../assets/images/icon/user.svg'
import CalendarImg from '../../assets/images/icon/calendar.svg'

class Contacts extends Component {
    render() {
        return (
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />

                <main className="main">
                    <Sidebar/>
                    <div class="main__content">
                    {/* <!-- contact --> */}
                    <div class="contact">
                        <h2 class="second-title mb-4">Contact</h2>

                        {/* <!-- maps --> */}
                        <div class="contact__maps">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.75769393811!2d2.2770197739280174!3d48.85895068137428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sci!4v1618824855991!5m2!1sfr!2sci"
                                width="600" height="450" style={{border : 0 + "px" }} allowfullscreen="" loading="lazy"></iframe>
                        </div>

                        {/* <!-- contact form & info --> */}
                        <div class="row">
                            <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                                <div class="contact__info">
                                    <h3 class="second-title mb-5">Information de contact</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                                        ducimus molestias tenetur blanditiis praesentium.
                                    </p>
                                    <div class="contact__info--item mt-5 mb-4">
                                        <span class="third-title mb-2">Réseaux sociaux</span>
                                        <hr />
                                        <ul class="reseaux mt-3">
                                            <a href="#" target="_blank">
                                                <li class="flex-center">
                                                    <img src={CalendarImg} alt="icone reseaux" />
                                                </li>
                                            </a>
                                            <a href="#" target="_blank">
                                                <li class="flex-center">
                                                    <img src={CalendarImg} alt="icone reseaux" />
                                                </li>
                                            </a>
                                            <a href="#" target="_blank">
                                                <li class="flex-center">
                                                    <img src={CalendarImg} alt="icone reseaux" />
                                                </li>
                                            </a>
                                            <a href="#" target="_blank">
                                                <li class="flex-center">
                                                    <img src={CalendarImg} alt="icone reseaux" />
                                                </li>
                                            </a>
                                        </ul>
                                    </div>

                                    <div class="contact__info--item mt-5 mb-4">
                                        <span class="third-title mb-2">Téléphone - Mail - Adresse</span>
                                        <hr /> 
                                        <ul class="flex-info">
                                            <li>
                                                <img src={CalendarImg} alt="icone" />
                                                <span>+225000000000</span>
                                            </li>
                                            <li>
                                                <img src={CalendarImg} alt="icone" />
                                                <span>lionceaux@gmail.com</span>
                                            </li>
                                            <li>
                                                <img src={CalendarImg} alt="icone" />
                                                <span>Paris rue XXXXXXXXX</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="contact__info--item mt-5 mb-4">
                                        <span class="third-title mb-2">Heure d'ouverture</span>
                                        <hr />
                                        <ul class="flex-info">
                                            <li>
                                                <img src={CalendarImg} alt="icone" />
                                                <span>Lun: 08h-17h / Mar: 08h-17h</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                                <div class="contact__form">
                                    <h3 class="second-title mb-5">Formulaire de contact</h3>
                                    <form class="form-row contact-form">
                                        <div class="col-md-6">
                                            <label for="name">Nom</label>
                                            <input type="text" id="name"/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="last-name">Prenom</label>
                                            <input type="text" id="laste-name" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="phone">Téléphone</label>
                                            <input type="text" id="phone" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="mail">E-mail</label>
                                            <input type="email" id="mail" />
                                        </div>
                                        <div class="col-md-12">
                                            <label for="message">Message</label>
                                            <textarea name="" id="message"></textarea>
                                        </div>
                                        <div class="col-md-12">
                                            <button type="button" class="btn-orange">Envoyer</button>
                                        </div>
                                    </form>
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

export default Contacts;