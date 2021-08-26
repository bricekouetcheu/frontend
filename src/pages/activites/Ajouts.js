import React, { Component } from 'react';
import {connect} from 'react-redux'

import {Link, Redirect} from 'react-router-dom'

import { createActiviteService } from '../../store/actions/activite'

//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'

class AjoutsActivite extends Component {
    constructor(props){
        super(props)
        this.state = {
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
    handleSubmit = async e => {
        e.preventDefault()
        const {date_activite,heure_debut,heure_fin,art,lecture,remarque,groupe} = this.state

        const data = {date_activite,heure_debut,heure_fin,art,lecture,remarque,groupe}
        console.log('data to create',data)
        const finalData = {
            ...data,
            groupe_set : [
                {nom : groupe,status : true}
            ],
            remarque : "lorem"
        }
        await this.props.createActiviteService(finalData)
        this.setState({
            success: true
        })
    }
    render() {
        
        const {date_activite,heure_debut,heure_fin,art,lecture,remarque,groupe,success} = this.state
        let redirect = null
        if(success){
            redirect = <Redirect to="/activity" />
        }
        return (
            <>
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                <main className="main">
                    <Sidebar/>
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
                                            <option selected>Chosir le groupe</option>
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
                </main>
                <Footer/>
            </div>
            {redirect}
            </>
        );
    }
}

const mapStateToProps = state => ({blog : state.blog,auth : state.auth})
const mapDispatchToProps = dispatch => ({
    createActiviteService : (data) => dispatch(createActiviteService(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(AjoutsActivite);