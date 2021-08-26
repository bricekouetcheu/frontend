import React, { Component } from 'react';
import {connect} from 'react-redux'
//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'
import {Loader} from '../../components/loader/Loader'
import {Link, Redirect} from 'react-router-dom'

import {agendaDetailService,updateAgendaService} from '../../store/actions/agenda'

class UpdateAgenda extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            success : false,
            date_evenement : "",
            titre_evenement:"",
            description:"",
            heure:""
        }
    }

    async componentDidMount(){
        await this.props.agendaDetailService(this.state.id)
        this.setState({
            titre_evenement : this.props.agenda.agenda.titre_evenement,
            date_evenement : this.props.agenda.agenda.date_evenement,
            description : this.props.agenda.agenda.description,
            heure : this.props.agenda.agenda.heure,
        })
    }

    handleSubmit = async (e) => {
        const {date_evenement,titre_evenement,description,heure} = this.state
        e.preventDefault()
        const data = {
            date_evenement,
            titre_evenement,
            description,
            date_evenement,
            heure,
        }
        await this.props.updateAgendaService(data)
        this.setState({
            success : true
        })

    }
    render() {
        const {date_evenement,titre_evenement,description,heure,success} = this.state
        let redirect = null
        if(success){
            redirect = <Redirect to="/agenda" />
        }
        let Update = (
            <>
                <main className="main">
                    <Sidebar />
                    {!this.props.agenda.agenda ?
                        <div className="w-100 d-flex justify-content-center align-items-center">
                            <Loader/>
                        </div> : 
                        <div className="main__content">
                        {/* <!-- Agenda --> */}
                        <div className="agenda">
                            <h2 className="second-title mb-4">Ajout agenda</h2>
                            <ul className="breadcrumbs">
                                <li>
                                    <Link to="/agenda">Agenda</Link>
                                </li>
                                <li>
                                    <Link to="/add-agenda">Ajout</Link>
                                </li>
                            </ul>
                            <div className="activite__form">
                                <form className="contact__form" onSubmit={this.handleSubmit}>
                                    <div className="mb-4">
                                        <label for="titre">Titre</label>
                                        <input type="text" id="titre" value={titre_evenement} onChange={(e)=> this.setState({ titre_evenement : e.target.value})} />
                                    </div>
                                    <div className="mb-4">
                                        <label for="date">Date</label>
                                        <input type="date" id="date" value={date_evenement} onChange={(e)=> this.setState({ date_evenement : e.target.value})} />
                                    </div>
                                    <div className="mb-4">
                                        <label for="datetime">Heure</label>
                                        <input type="time" id="datetitme" value={heure} onChange={(e)=> this.setState({ heure: e.target.value})} />
                                    </div>
                                    <div>
                                        <label for="agenda">Decription</label>
                                        <textarea id="agenda" value={description} onChange={(e)=> this.setState({ description : e.target.value})}></textarea>
                                    </div>
                                    <div className="mt-5 text-center">
                                        <button type="submit" className="btn-orange">Modifier</button>
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

const mapStateToProps = state => ({auth : state.auth,blog : state.blog,agenda : state.agenda})
const mapDispatchToProps = dispatch => ({
    agendaDetailService : (id) => dispatch(agendaDetailService(id)),
    updateAgendaService : (data) => dispatch(updateAgendaService(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(UpdateAgenda);