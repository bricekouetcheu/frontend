import React, { Component } from 'react';


//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'

//Images
import HomeImg from '../../assets/images/home.jpg'
import FeaturesIcon from '../../assets/images/bg/feature-icon-1.png'
import FeaturesIcon2 from '../../assets/images/bg/feature-icon-2.png'
import FeaturesIcon3 from '../../assets/images/bg/feature-icon-3.png'
class Home extends Component {
    render() {
        return (
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />

                <main className="main">

                    <Sidebar/>
                    <div class="main__content">
                    
                        <div class="home-baniere">
                            <img src={HomeImg} alt="images" />
                        </div>

                        <div class="home-content">
                            <h1>Bienvenu chez les lionceaux</h1>
                            <p class="text-center">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Error, nam veritatis
                                delectus ipsum suscipit accusamus magnam? Eum doloremque optio eligendi, in quis
                                hic modi culpa animi sed expedita, nisi porro? <br/>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nam veritatis
                                delectus ipsum suscipit accusamus magnam? Eum doloremque optio eligendi, in quis
                                hic modi culpa animi sed expedita, nisi porro?
                            </p>
                            <div class="row mt-5">
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="card-home bg-orange">
                                        <p class="box-img">
                                            <img src={FeaturesIcon} alt="icone" />
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
                                            <img src={FeaturesIcon2} alt="icone" />
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
                                            <img src={FeaturesIcon3} alt="icone" />
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
                
            </div>
        );
    }
}

export default Home;