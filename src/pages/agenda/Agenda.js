import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { agendaListService, deleteAgendaService } from '../../store/actions/agenda';


//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Footer } from '../../components/footer/Footer'
import { Loader } from '../../components/loader/Loader'


class Agenda extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.agendaListService()
    }

    goToDetails = (id) => this.props.history.push(`/vue-agenda/${id}`)
    goToUpdate = (id) => this.props.history.push(`/agenda-update/${id}`)
    deleteAgenda = async (id) => {
        await this.props.deleteAgendaService(id)
    }

    render() {
        let Agenda = (
            <main className="main">
                <Sidebar />
                {this.props.agenda.loading || !this.props.agenda.agendas ?
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <Loader />
                    </div> :
                    <div className="main__content">
                        {/*Agenda */}
                        <div className="agenda">
                            <div className="activite__title">
                                <h2 className="second-title mb-4">Agenda</h2>
                                {this.props.auth.username[0].is_directrice ?
                                    <Link to="/add-agenda"><button type="button"
                                        className="btn-default btn-green">Ajouter</button>
                                    </Link>
                                    : null
                                }
                            </div>
                            {this.props.agenda.agendas.map((item, index) => {
                                return (
                                    <div className="agenda__item" key={item.id}>
                                        <h3 className="text-center">{item.titre_evenement}</h3>
                                        <div className="agenda__item--date">
                                            <div className="day flex-center">
                                                <p>{item.id}</p>
                                            </div>
                                            <p>{item.date_evenement}</p>
                                            <p className="m-3">à</p>
                                            <p>{item.heure}</p>
                                        </div>
                                        <div class="agenda__item--content">
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className='text-right mt-3'>
                                            <button className="btn-orange" onClick={() => this.goToDetails(item.id)}>Voir plus</button>
                                            {this.props.auth.token ?
                                                <>{
                                                    this.props.auth.username[0].is_directrice ?
                                                        <>
                                                            <button type="button" className="btn-dafult btn-green ml-2" onClick={() => this.goToUpdate(item.id)}>
                                                                Modifier
                                                            </button>
                                                            <button className="btn btn-danger ml-3" onClick={() => this.deleteAgenda(item.id)}>Supprimer</button>
                                                        </> : null
                                                }
                                                </> : null
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </main>
        )
        return (
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                {Agenda}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({ blog: state.blog, auth: state.auth, agenda: state.agenda })
const mapDispatchToProps = dispatch => ({
    agendaListService: () => dispatch(agendaListService()),
    deleteAgendaService: (id) => dispatch(deleteAgendaService(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Agenda);