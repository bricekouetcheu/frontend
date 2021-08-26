import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


import { agendaDetailService } from '../../store/actions/agenda';


//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'

class VueAgenda extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id
        }

    }
    componentDidMount(){
        this.props.agendaDetailService(this.state.id)
    }

    render() {
        const {id,date_evenement,titre_evenement,description,date_add,date_upd,heure} = this.props.agenda.agenda
        return (
            <div className="body-main">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                <main className="main">
                    <Sidebar />
                    <div className="main__content">
                        
                        <div class="agenda">
                            <h2 class="second-title mb-4">Aperçue agenda</h2>
                            <ul class="breadcrumbs mb-5">
                                <li>
                                    <Link to="/agenda">Agenda</Link>
                                </li>
                                {/* <li>
                                    <Link to="/add-agenda">Ajout</Link>
                                </li> */}
                                <li>
                                    <Link to="vue-agenda">Aperçue</Link>
                                </li>
                            </ul>
                            <div class="agenda__item">
                            <h3 className="text-center">{titre_evenement}</h3>
                                <div class="agenda__item--date">
                                    <div class="day flex-center">
                                        <p>{id}</p>
                                    </div>
                                    <p>{date_evenement}</p>
                                    <p className="m-3">à</p>
                                    <p>{heure}</p>
                                </div>
                                <div class="agenda__item--content">
                                    <p>
                                        {description}
                                    </p>
                                </div>
                            </div>
                            <div>
                                {/* <a href="#">
                                    <button type="button" class="btn-dafult btn-green" data-toggle="modal"
                                        data-target="#exampleModalCenter">
                                        Modifier
                                    </button>
                                </a> */}
                                {/* <Link to="/agenda">Agenda</Link> */}
                            </div>
                        </div>
                    </div>

                </main>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = state => ({auth : state.auth,blog : state.blog,agenda : state.agenda})
const mapDispatchToProps = dispatch => ({
    agendaDetailService : (id) => dispatch(agendaDetailService(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(VueAgenda);