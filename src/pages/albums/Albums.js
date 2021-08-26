import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


//servies
import { albumListService } from '../../store/actions/galerie';

//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Footer } from '../../components/footer/Footer'
import { Loader } from '../../components/loader/Loader'


//Images
import C1 from '../../assets/images/c1.jpeg'

class Albums extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.albumListService()
    }

    goToGalerie = (id) => {
        this.props.history.push(`/albums-galerie/${id}`)
    }
    render() {
        console.log(this.props.user)
        let Albums = (
            <main className="main">
                <Sidebar />
                {this.props.album.loading || !this.props.album.albums ?
                    <div class="w-100 d-flex justify-content-center align-items-center">
                        <Loader />
                    </div>
                    :
                    <div className="main__content">
                        {/* <!-- galerie --> */}
                        <div className="box-galerie">
                            <div className="activite__title">
                                <h2 className="second-title mb-4">Album</h2>

                                {/* <Link to="/add-album"><button type="button"
                                        className="btn-default btn-green">Ajouter</button></Link>
                                    */}
                            </div>
                            <div className="row">
                                {this.props.album.albums.map((item, index) => {
                                    return (
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-6 cursor-pointer" key={item.id}>
                                            <div style={{ cursor: 'pointer' }} onClick={() => this.goToGalerie(item.id)}>
                                                <div className="card-album">
                                                    <div className="card-album__img">
                                                        <img src={C1} alt="images" />
                                                    </div>
                                                    <div className="card-album__title">
                                                        <h4 className="four-title">{item.titre}</h4>
                                                    </div>
                                                </div>
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
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                {Albums}
                <Footer />

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    album: state.album
})
const mapDispatchToProps = dispatch => ({
    albumListService: () => dispatch(albumListService())
})

export default connect(mapStateToProps, mapDispatchToProps)(Albums);