import React, { Component } from 'react';
import {connect} from 'react-redux'


import {albumsGalerieService} from '../../store/actions/galerie' 

//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'
import {Loader} from '../../components/loader/Loader'


//Images
import Galerie1 from '../../assets/images/photo/galerie-1.jpg'
import Galerie2 from '../../assets/images/photo/galerie-2.jpg'
import Galerie3 from '../../assets/images/photo/galerie-3.jpg'
import Galerie4 from '../../assets/images/photo/galerie-4.jpg'
import Galerie5 from '../../assets/images/photo/galerie-5.jpg'
import Galerie6 from '../../assets/images/photo/galerie-6.jpg'
import Galerie7 from '../../assets/images/photo/galerie-7.jpg'

class AlbumsGalerie extends Component {

    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id
        }
    }

    componentDidMount(){
        this.props.albumsGalerieService(this.state.id)
    }

    render() {
        console.log(this.props.album.galerie)
        let Galerie = (
            <main className="main">
                <Sidebar />
                {this.props.album.loading || !this.props.album.galerie ?
                    <div class="w-100 d-flex justify-content-center align-items-center">
                        <Loader/>
                    </div>  
                    : 
                    <div class="main__content">
                    {/* <!-- galerie --> */}
                    <div class="box-galerie">
                        <div>
                            <h2 class="second-title mb-4">Galeries</h2>
                        </div>
                        <div class="row">
                            {this.props.album.galerie.album_galerie.map((item,index)=>{
                                return(
                                    <div class="col-lg-4 col-md-4 col-sm-6 col-12" key={item.id}>
                                        <div class="galerie-item height-2">
                                            <img src={item.image} />
                                            {/* <a data-fancybox="gallery" href={Galerie1}></a> */}
                                        </div>
                                    
                                    </div>

                                )
                                
                            })}
                            
                        </div>
                    </div>
                </div>
                } 
                </main>

        )
        return (
            <div className="body-name">
                <Header title="Crèche les lionceaux" />
                    {Galerie}
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    album : state.album
  })
const mapDispatchToProps = dispatch => ({
    albumsGalerieService : (id) => dispatch(albumsGalerieService(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(AlbumsGalerie);




