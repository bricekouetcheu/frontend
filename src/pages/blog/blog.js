import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { blogListService, deleteBlogService } from '../../store/actions/blog'

//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Footer } from '../../components/footer/Footer'
import { Loader } from '../../components/loader/Loader'

//Images
import UserImg from '../../assets/images/icon/user.svg'
import CalendarImg from '../../assets/images/icon/calendar.svg'

class Blog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }

    componentDidMount() {
        this.props.blogListService()
    }

    goToDetails = (id) => this.props.history.push(`blog/${id}`)
    goToUpdate = (id) => this.props.history.push(`blog-update/${id}`)
    deleteBlog = async (id) => {
        await this.props.deleteBlogService(id)
    }
    render() {
        let Blogs = (

            <main className="main">
                <Sidebar />
                {/* blog  */}
                {this.props.blog.loading || !this.props.blog.blogs ?
                    <div class="w-100 d-flex justify-content-center align-items-center">
                        <Loader />
                    </div>
                    :
                    <div className="main__content">
                        <div class="blog">
                            <h2 class="second-title mb-4">Blogs</h2>
                            {/* Utilisateur connecté  ?  */}
                            {this.props.auth.username[0].is_directrice ?
                                <Link to="/add-blog"><button type="button"
                                    class="btn-default btn-green text-right">Ajouter</button>
                                </Link> : null
                            }

                            <div class="row">
                                {this.props.blog.blogs.map((item, index) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                                            <div className="card-blog" >
                                                <div className="card-blog__img">
                                                    <img src={item.image} alt="images" />
                                                </div>
                                                <div className="card-blog__text">
                                                    <span class="title-blog">{item.titre}</span>
                                                    <ul>
                                                        <li>
                                                            <img src={UserImg} alt="icone" />
                                                            <span>Admin</span>
                                                        </li>
                                                        <li>
                                                            <img src={CalendarImg} alt="icone" />
                                                            <span>19-Avril-2021</span>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                    <button type="button" className="btn-orange" onClick={() => this.goToDetails(item.id)}>Lire Plus</button>
                                                    {/* Utilisateur connecté  ?  */}
                                                    {this.props.auth.token ?
                                                        <>{
                                                            this.props.auth.username[0].is_directrice ?
                                                                <>
                                                                    <button type="button" className="btn btn-primary ml-3" onClick={() => this.goToUpdate(item.id)}>Modifier</button>
                                                                    <button type="button" className="btn btn-danger ml-3" onClick={() => this.deleteBlog(item.id)}>Supprimer</button>
                                                                </> : null
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
            </main>)

        return (
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                {Blogs}
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({ blog: state.blog, auth: state.auth })
const mapDispatchToProps = dispatch => ({
    blogListService: () => dispatch(blogListService()),
    deleteBlogService: (id) => dispatch(deleteBlogService(id))

})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));