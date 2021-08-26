import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import { createAgendaService } from '../../store/actions/agenda'




//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Footer } from '../../components/footer/Footer'

class AjoutsAgenda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titre_evenement: "",
            description: "",
            heure: "",
            date_evenement: "",
            success: false
        }
    }
    handleSubmit = async e => {
        e.preventDefault()
        const { titre_evenement, description, heure, date_evenement } = this.state
        const data = {
            titre_evenement,
            description,
            heure,
            date_evenement
        }

        await this.props.createAgendaService(data)
        this.setState({
            success: true
        })
    }
    render() {
        const { titre_evenement, description, success, heure, date_evenement } = this.state
        let redirect = null
        if (success) {
            redirect = <Redirect to="/agenda" />
        }
        return (
            <>
                <div className="body-home">
                    {/* Header */}
                    <Header title="Crèche les lionceaux" />
                    <main className="main">
                        <Sidebar />
                        <div class="main__content">
                            {/* <!-- Agenda --> */}
                            <div class="agenda">
                                <h2 class="second-title mb-4">Ajout agenda</h2>
                                <ul class="breadcrumbs">
                                    <li>
                                        <Link to="/agenda">Agenda</Link>
                                    </li>
                                    <li>
                                        <Link to="/add-agenda">Ajout</Link>
                                    </li>
                                </ul>
                                <div class="activite__form">
                                    <form class="contact__form" onSubmit={this.handleSubmit}>
                                        <div class="mb-4">
                                            <label for="titre">Titre</label>
                                            <input type="text" id="titre" value={titre_evenement} onChange={(e) => this.setState({ titre_evenement: e.target.value })} />
                                        </div>
                                        <div class="mb-4">
                                            <label for="date">Date</label>
                                            <input type="date" id="date" value={date_evenement} onChange={(e) => this.setState({ date_evenement: e.target.value })} />
                                        </div>
                                        <div class="mb-4">
                                            <label for="datetime">Heure</label>
                                            <input type="time" id="datetitme" value={heure} onChange={(e) => this.setState({ heure: e.target.value })} />
                                        </div>
                                        <div>
                                            <label for="agenda">Decription</label>
                                            <textarea id="agenda" value={description} onChange={(e) => this.setState({ description: e.target.value })}></textarea>
                                        </div>
                                        <div class="mt-5 text-center">
                                            <button type="submit" class="btn-orange">Créer</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </main>
                    <Footer />
                </div>
                {redirect}
            </>
        );
    }
}

const mapStateToProps = state => ({ blog: state.blog, auth: state.auth, agenda: state.agenda })
const mapDispatchToProps = dispatch => ({
    createAgendaService: (data) => dispatch(createAgendaService(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(AjoutsAgenda);