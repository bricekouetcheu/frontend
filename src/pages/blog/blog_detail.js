import React, { useState, useEffect } from 'react';

import { useDispatch } from "react-redux";
import { retrieveBlogDetail } from "../../actions/blog";
import BlogService from "../../services/blog.service";


//Moment
import "moment/locale/fr";
import * as moment from "moment";


import Footer from '../../components/footer';
import Header from '../../components/header';

import Navbar from '../../components/navbar'
import { NavLink } from 'react-router-dom';


const Blog_detail = (props) => {

    console.log("Detail", props.match.params.id);

    let dateFrench = d => moment(d).format("L")

    const initialTutorialState = {
        id: null,
        titre: "",
        image: "",
        auteur: "",
        description: "",
        date_add: ""
    };
    const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);

    const dispatch = useDispatch();

    const getTutorial = id => {
        BlogService.getBlog(id)
            .then(response => {
                setCurrentTutorial(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getTutorial(props.match.params.id);
    }, [props.match.params.id]);


    useEffect(() => {
        dispatch(retrieveBlogDetail(currentTutorial.id));
    });

    return (
        <>
            <Header />
            <main class="main">

                <Navbar />


                <div class="main__content">
                    <div class="blog">
                        <h2 class="second-title mb-4"><NavLink to="/blog">Blog detail</NavLink></h2>
                        <div class="blog-img">
                            <img src={currentTutorial.image} alt="" />
                        </div>
                        <div class="blog-text">
                            <h3 class="third-title">{currentTutorial.titre}</h3>
                            <ul>
                                <li><strong>Auteur </strong>: {currentTutorial.auteur.username}</li>
                                <li><strong>Date </strong>: {dateFrench(currentTutorial.date_add)}</li>
                            </ul>
                            <p>
                                {currentTutorial.description}
                            </p>
                        </div>
                    </div>
                </div>


            </main>
            <Footer />
        </>
    );
};

export default Blog_detail;