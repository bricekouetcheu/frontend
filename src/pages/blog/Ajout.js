import React ,{Component} from 'react'
import {connect} from 'react-redux'



import {Link, Redirect} from 'react-router-dom'


import { createBlogService } from '../../store/actions/blog'
//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'


class AjoutBLog extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : "",
            description : "",
            image : null,
            success : false
        }

        
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {title,description,image} = this.state
        const data = {
            titre : title,
            description,
            image
        }
        
        await this.props.createBlogService(data)
        this.setState({
            success: true
        })
    }

    render(){
        const {title,description,image,success} = this.state
        
        let redirect = null
        if(success){
            redirect = <Redirect to="/blog" />
        }
        return(
            <>
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                <main className="main">
                    <Sidebar />
                    <div class="main__content">
                    {/* <!-- Agenda --> */}
                    <div class="agenda">
                        <h2 class="second-title mb-4">Ajout BLog</h2>
                        <ul class="breadcrumbs">
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/add-blog">Ajout</Link>
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
                                    <input type="file" id="image" name="file"  onChange={ e => this.setState({image : e.target.files[0]})}  />
                                </div>
                                <div>
                                    <label for="descriotion">Description</label>
                                    <textarea id="description" value={description} onChange={e => this.setState({description : e.target.value})}></textarea>
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

const mapStateToProps = state => ({blog : state.blog,auth : state.auth})
const mapDispatchToProps = dispatch => ({
    createBlogService : (data) => dispatch(createBlogService(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(AjoutBLog) 