import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';

const Projet_pedagogie = () => {
    return (
        <>
            <Header />
            <main class="main">
                <Navbar />
                <div class="main__content">
                    <div class="projet">
                        <h2 class="second-title mb-4">Projet Pedagogique</h2>

                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="card-projet">
                                    <div class="card-projet__number flex-center">
                                        <p>1</p>
                                    </div>
                                    <h3 class="second-title mb-4">Education</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus ipsam
                                        fugiat cum quam quaerat suscipit esse, optio illo, placeat rerum earum repudiandae
                                        recusandae, ab expedita! Velit nobis obcaecati voluptate.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="card-projet">
                                    <div class="card-projet__number flex-center">
                                        <p>2</p>
                                    </div>
                                    <h3 class="second-title mb-4">Solidarité</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus ipsam
                                        fugiat cum quam quaerat suscipit esse, optio illo, placeat rerum earum repudiandae
                                        recusandae, ab expedita! Velit nobis obcaecati voluptate.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="card-projet">
                                    <div class="card-projet__number flex-center">
                                        <p>3</p>
                                    </div>
                                    <h3 class="second-title mb-4">Egalité</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus ipsam
                                        fugiat cum quam quaerat suscipit esse, optio illo, placeat rerum earum repudiandae
                                        recusandae, ab expedita! Velit nobis obcaecati voluptate.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="card-projet">
                                    <div class="card-projet__number flex-center">
                                        <p>4</p>
                                    </div>
                                    <h3 class="second-title mb-4">Créativité</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus ipsam
                                        fugiat cum quam quaerat suscipit esse, optio illo, placeat rerum earum repudiandae
                                        recusandae, ab expedita! Velit nobis obcaecati voluptate.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="card-projet">
                                    <div class="card-projet__number flex-center">
                                        <p>5</p>
                                    </div>
                                    <h3 class="second-title mb-4">Capacité à aimer</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus ipsam
                                        fugiat cum quam quaerat suscipit esse, optio illo, placeat rerum earum repudiandae
                                        recusandae, ab expedita! Velit nobis obcaecati voluptate.
                                    </p>
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

export default Projet_pedagogie;