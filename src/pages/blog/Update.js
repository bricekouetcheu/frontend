import React, { Component } from 'react';
import {connect} from 'react-redux'

import { blogDetailService,updateBlogService } from '../../store/actions/blog';

//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'
import {Loader} from '../../components/loader/Loader'
import {Link, Redirect} from 'react-router-dom'

class UpdateBlog extends Component {

    constructor(props){
        super(props)
        this.state = {
            slug : this.props.match.params.slug,
            title : "",
            description : "",
            image : "",
            success : false
        }
    }

     async componentDidMount(){
        await this.props.blogDetailService(this.state.slug)

        this.setState({
            title : this.props.blog.blog.titre,
            description : this.props.blog.blog.description,
        })
    }

    handleSubmit = async (e) => {
        const {title,description,image} = this.state
        e.preventDefault()
        const data = {
            titre : title,
            description,
            image
        }
        await this.props.updateBlogService(data)

        this.setState({
            success : true
        })
        
    }

    render() {
        const {title,description,image,success} = this.state
        let redirect = null
        if(success){
            redirect = <Redirect to="/blog" />
        }
        let Update = (
            <>
            <main className="main">
                    <Sidebar />
                    {!this.props.blog.blog ? 
                        <div class="w-100 d-flex justify-content-center align-items-center">
                            <Loader/>
                        </div> : 
                        <div class="main__content">
                        {/* <!-- Agenda --> */}
                        <div class="agenda">
                            <h2 class="second-title mb-4">Mise à jour BLog</h2>
                            <ul class="breadcrumbs">
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/add-blog">Mise a jour</Link>
                                </li>
                            </ul>
                            <div class="activite__form">
                                <form class="contact__form">
                                    <div class="mb-4">
                                        <label for="titre">Titre</label>
                                        <input type="text" id="titre" value={title} onChange={ e => this.setState({title : e.target.value}) } />
                                    </div>
                                    <div class="mb-4">
                                        <label for="image">Sélectionnez une image</label>
                                        <input type="file" id="image" name="file" onChange={ e => this.setState({image : e.target.files[0]})}  />
                                    </div>
                                    <div>   
                                        <label for="descriotion">Description</label>
                                        <textarea id="description" value={description} onChange={e => this.setState({description : e.target.value})}></textarea>
                                    </div>
                                    <div class="mt-5 text-center">
                                        <button onClick={this.handleSubmit} class="btn-orange">Modifier</button> 
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

const mapStateToProps = state => ({auth : state.auth,blog : state.blog})
const mapDispatchToProps = dispatch => ({
    blogDetailService : (id) => dispatch(blogDetailService(id)),
    updateBlogService : (data) => dispatch(updateBlogService(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(UpdateBlog);