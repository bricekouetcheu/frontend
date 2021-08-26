import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

import { createAlbumService } from '../../store/actions/galerie'

//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'

class AjoutAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            titre : "",
            success : false
        }

        
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {titre} = this.state
        const data = {
            titre,
            status : true
        }
        
        await this.props.createAlbumService(data)
        this.setState({
            success: true
        })
    }
    render() {
        const {titre,success} = this.state
        
        let redirect = null
        if(success){
            redirect = <Redirect to="/albums" />
        }

        return (
            <>
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                <main className="main">
                    <Sidebar />
                    <div class="main__content">
                    {/* <!-- Album --> */}
                    <div class="agenda">
                        <h2 class="second-title mb-4">Creation Album</h2>
                        <ul class="breadcrumbs">
                            <li>
                                <Link to="/album">Album</Link>
                            </li>
                            <li>
                                <Link to="/add-album">Ajout</Link>
                            </li>
                        </ul>
                        <div class="activite__form">
                            <form class="contact__form">
                                <div class="mb-4">
                                    <label for="titre">Titre</label>
                                    <input type="text" id="titre" value={titre} onChange={ e => this.setState({titre: e.target.value}) } />
                                </div>
                                <div class="mt-5 text-center">
                                    <button onClick={this.handleSubmit} class="btn-orange">Créer</button> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                </main>
                
                <Footer/>
            </div>
            {redirect}
            </>
        )
    }
}

const mapStateToProps = state => ({blog : state.blog,auth : state.auth,galerie : state.galerie})
const mapDispatchToProps = dispatch => ({
    createAlbumService : (data) => dispatch(createAlbumService(data))

})

export default  connect(mapStateToProps,mapDispatchToProps)(AjoutAlbum)
