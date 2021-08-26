import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'

import { updateActiviteService,activiteDetailService } from '../../store/actions/activite'
import { Loader } from '../../components/loader/Loader';


class UpdateActivite extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            date_activite : "",
            heure_debut : "",
            heure_fin : "",
            art : "",
            lecture : "",
            remarque : "",
            groupe:"",
            success : false
        }
    }
    async componentDidMount(){
        await this.props.activiteDetailService(this.state.id)

        this.setState({
            date_activite : this.props.activite.activite.date_activite,
            heure_debut : this.props.activite.activite.heure_debut,
            heure_fin : this.props.activite.activite.heure_fin,
            art : this.props.activite.activite.art,
            lecture : this.props.activite.activite.lecture,
            remarque : this.props.activite.activite.remarque,
            groupe : this.props.activite.activite.groupe_set[0].nom,
        })
    }
    handleSubmit = async (e) => {
        const {date_activite,heure_debut,heure_fin,art,lecture,remarque,groupe} = this.state
        e.preventDefault()
        
        const data = {date_activite,heure_debut,heure_fin,art,lecture,remarque,groupe} 
        
        await this.props.updateActiviteService(data)

        this.setState({
            success : true
        })
        
    }
    render() {
        const {date_activite,heure_debut,heure_fin,art,lecture,remarque,groupe,success,id} = this.state
        let redirect = null
        if(success){
            redirect = <Redirect to="/activity" />
        }
        let Update = (
            <>
            <main className="main">
                <Sidebar/>
                {!this.props.activite.activite ? 
                    <div class="w-100 d-flex justify-content-center align-items-center">
                        <Loader/>
                    </div> :
                    <div class="main__content">
                    {/* <!-- activité --> */}
                    <div class="activite">
                        <h2 class="second-title mb-4">Ajout d'activité</h2>
                        <div class="activite__form">
                            <form class="form-activite form-row" onSubmit={this.handleSubmit}>
                                <div class="col-md-12 mb-4">
                                    <label for="date">Date</label>
                                    <input type="date" id="date" value={date_activite} onChange={(e)=>this.setState({date_activite : e.target.value})} />
                                </div>
                                <div class="col-md-6 mb-4">
                                    <label for="heure-1">Debut</label>
                                    <input type="time" id="heure-1" value={heure_debut} onChange={(e)=>this.setState({heure_debut : e.target.value})}/>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <label for="heure-2">Fin</label>
                                    <input type="time" id="heure-2" value={heure_fin} onChange={(e)=>this.setState({heure_fin : e.target.value})} />
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label for="enfant">Groupe</label>
                                    <select id="enfant" value={groupe} onChange={(e)=>this.setState({groupe: e.target.value})}>
                                        <option defaultValue>Chosir le groupe</option>
                                        <option value="petit">petit</option>
                                        <option value="grand">grand</option>
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label for="enfant">Art</label>
                                    <select id="enfant" value={art} onChange={(e)=>this.setState({art : e.target.value})}>
                                        <option value="chant">Chant</option>
                                        <option value="desin">Desin</option>
                                        <option value="danse">Danse</option>
                                    </select>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <label for="enfant">Lecture</label>
                                    <select id="enfant" value={lecture} onChange={(e)=>this.setState({lecture : e.target.value})}>
                                        <option value="pichou">Pichou</option>
                                        {/* <option value="1">Choupi</option> */}
                                            <option value="dingo">Dingo</option>

                                        </select>
                                    </div>
                                    <div class="col-md-12 mb-4">
                                        <label for="remarque">Remarque</label>
                                        <input type="text" id="remarque" value={remarque} onChange={(e)=>this.setState({remarque : e.target.value})} />
                                    </div>

                                    <div class="col-md-12 mt-5 text-center">
                                        <button type="submit" class="btn-orange">Valider</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    }   
                </main>
                {redirect}
                </>
        )
        return (
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                    {Update}
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({blog : state.blog,auth : state.auth,activite : state.activite})
const mapDispatchToProps = dispatch => ({
    updateActiviteService : (data) => dispatch(updateActiviteService(data)),
    activiteDetailService : (id) => dispatch(activiteDetailService(id))

})

export default connect(mapStateToProps,mapDispatchToProps)(UpdateActivite);