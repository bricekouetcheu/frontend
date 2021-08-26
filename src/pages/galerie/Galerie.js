import React, { Component } from 'react';


//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'


//Images
import Galerie1 from '../../assets/images/photo/galerie-1.jpg'
import Galerie2 from '../../assets/images/photo/galerie-2.jpg'
import Galerie3 from '../../assets/images/photo/galerie-3.jpg'
import Galerie4 from '../../assets/images/photo/galerie-4.jpg'
import Galerie5 from '../../assets/images/photo/galerie-5.jpg'
import Galerie6 from '../../assets/images/photo/galerie-6.jpg'
import Galerie7 from '../../assets/images/photo/galerie-7.jpg'

class Galerie extends Component {
    render() {
        return (
            <div className="body-name">
                <Header title="Ctèche les lionceaux" />
                <main className="main">
                    <Sidebar />
                    <div class="main__content">
                    {/* <!-- galerie --> */}
                    <div class="box-galerie">
                        <div>
                            <h2 class="second-title mb-4">Galeries</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="galerie-item height-2">
                                    <img src={Galerie1} />
                                    {/* <a data-fancybox="gallery" href={Galerie1}></a> */}
                                </div>
                                <div class="galerie-item height-1">
                                    <img src={Galerie2} />
                                    {/* <a data-fancybox="gallery" href={Galerie2}></a> */}
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="galerie-item height-1">
                                    <img src={Galerie3} />
                                    {/* <a data-fancybox="gallery" href={Galerie3}></a> */}
                                </div>
                                <div class="galerie-item height-1">
                                    <img src={Galerie4} />
                                    {/* <a data-fancybox="gallery" href={Galerie4}></a> */}
                                </div>
                                <div class="galerie-item height-1">
                                    <img src={Galerie5} />
                                    {/* <a data-fancybox="gallery" href={Galerie5}></a> */}
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="galerie-item height-1">
                                <img src={Galerie6} />
                                    {/* <a data-fancybox="gallery" href={Galerie6}></a> */}
                                </div>
                                <div class="galerie-item height-2">
                                <img src={Galerie7} />
                                    {/* <a data-fancybox="gallery" href={Galerie7}></a> */}
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

export default Galerie;