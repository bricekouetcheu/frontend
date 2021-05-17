import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';

const Home = () => {
    return (
        <>
            <Header />
            <main class="main">
                <Navbar />
                <div class="main__content">

                    <div class="home-baniere">
                        <img src="images/home.jpg" alt="images" />
                    </div>
                    <div class="home-content">
                        <h1>Bienvenu chez les lionceaux</h1>
                        <p class="text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Error, nam veritatis
                            delectus ipsum suscipit accusamus magnam? Eum doloremque optio eligendi, in quis
                            hic modi culpa animi sed expedita, nisi porro? <br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nam veritatis
                            delectus ipsum suscipit accusamus magnam? Eum doloremque optio eligendi, in quis
                            hic modi culpa animi sed expedita, nisi porro?
                        </p>
                        <div class="row mt-5">
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="card-home bg-orange">
                                    <p class="box-img">
                                        <img src="images/bg/feature-icon-1.png" alt="icone" />
                                    </p>
                                    <h2>Environnement heureux</h2>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis
                                        debitis quasi quidem cum doloremque deleniti aliquid repellendus similique ex.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="card-home bg-blue">
                                    <p class="box-img">
                                        <img src="images/bg/feature-icon-2.png" alt="icone" />
                                    </p>
                                    <h2>Apprentissage actif</h2>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis
                                        debitis quasi quidem cum doloremque deleniti aliquid repellendus similique ex.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="card-home bg-purple">
                                    <p class="box-img">
                                        <img src="images/bg/feature-icon-3.png" alt="icone" />
                                    </p>
                                    <h2>Léçons créatives</h2>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis
                                        debitis quasi quidem cum doloremque deleniti aliquid repellendus similique ex.
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

export default Home;