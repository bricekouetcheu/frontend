import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { activiteListService, deleteActiviteService } from '../../store/actions/activite'



//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Footer } from '../../components/footer/Footer'
import { Loader } from '../../components/loader/Loader'

//images 
import Check from "../../assets/images/icon/check.svg"


class Activites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }
    componentDidMount() {
        this.props.activiteListService()
    }

    goToUpdate = (id) => this.props.history.push(`/activity-update/${id}`)
    deleteActivite = (id) => this.props.deleteActiviteService(id)
    render() {
        let Activites = (
            <main className="main">
                <Sidebar />
                {this.props.activite.loading || !this.props.activite.activites ?
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <Loader />
                    </div> :
                    <div className="main__content">
                        {/* <!-- activité --> */}
                        <div className="activite">
                            <div className="activite__title">
                                <h2 className="second-title mb-4">Activités</h2>
                                {this.props.auth.username[0].is_parent ?
                                    
                                   
                                    null: <Link to="/add-activity"><button type="button"
                                    className="btn-default btn-green">Ajouter</button></Link>
                                }
                            </div>
                            <div class="row">
                                {this.props.activite.activites.map((item, index) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                                            <div className="card-activite">
                                                <div className="card-activite__title">
                                                    <span>Activité du {item.date_activite}</span>
                                                </div>
                                                <div className="card-activite__content">
                                                    <ul>
                                                        <li>
                                                            <img src={Check} alt="icone" />
                                                            <span>Lecture: {item.lecture}</span>
                                                        </li>
                                                        <li>
                                                            <img src={Check} alt="icone" />
                                                            <span>Art: {item.art}</span>
                                                        </li>

                                                    </ul>
                                                    <p><strong>Groupe: </strong> {item.groupe_set[0].nom}</p>
                                                </div>
                                                <div className="p-3">
                                                    {this.props.auth.token ?

                                                        <>
                                                            {
                                                                this.props.auth.username[0].is_parent ?
                                                                    null : <>
                                                                        <button className="btn btn-success" onClick={() => this.goToUpdate(item.id)}>Modifier</button>
                                                                        <button className="btn btn-danger ml-2" onClick={() => this.deleteActivite(item.id)}>Supprimer</button>
                                                                    </>
                                                            }
                                                        </> : null
                                                    }
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
                {Activites}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({ blog: state.blog, auth: state.auth, activite: state.activite })
const mapDispatchToProps = dispatch => ({
    activiteListService: () => dispatch(activiteListService()),
    deleteActiviteService: (id) => dispatch(deleteActiviteService(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Activites);