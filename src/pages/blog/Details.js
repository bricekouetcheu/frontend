import React, { Component } from 'react';
import {connect} from 'react-redux'


//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'

import Galerie2 from '../../assets/images/photo/galerie-2.jpg'
import { blogDetailService } from '../../store/actions/blog';

class BlogDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug : this.props.match.params.slug
        }

    }
    componentDidMount(){
        this.props.blogDetailService(this.state.slug)
    }
    render() {
        const {titre,description,image,auteur,date_add} = this.props.blog.blog

        return (
            <div className="body-home">
                {/* Header */}
                <Header title="Crèche les lionceaux" />
                <main className="main">
                    <Sidebar/>
                    <div class="main__content">
                        {/* <!-- blog --> */}
                        <div class="blog">
                            <h2 class="second-title mb-4">Blog detail</h2>
                            <div class="blog-img">
                                <img src={image} alt="image" />
                            </div>
                            <div class="blog-text">
                                <h3 class="third-title">{titre}</h3>
                                <ul>
                                    <li><strong>Auteur </strong>: {auteur}</li>
                                    <li><strong>Date </strong>: {date_add}</li>
                                </ul>
                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({auth : state.auth,blog : state.blog})
const mapDispatchToProps = dispatch => ({
    blogDetailService : (id) => dispatch(blogDetailService(id))
})

export default  connect(mapStateToProps,mapDispatchToProps)(BlogDetails);