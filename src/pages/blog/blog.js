import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import {
    retrieveBlog,
} from "../../actions/blog";


//Moment
import "moment/locale/fr";
import * as moment from "moment";


import Footer from '../../components/footer';
import Header from '../../components/header';

import Navbar from '../../components/navbar'



const Blog = () => {

    let dateFrench = d => moment(d).format("L")

    const myblog = useSelector(state => state.blog);
    const dispatch = useDispatch();

    // console.log("Resul", myblog);



    useEffect(() => {
        dispatch(retrieveBlog());
    });

    return (
        <>
            <Header />
            <main class="main">

                <Navbar />

                <div class="main__content">
                    <div class="blog">
                        <h2 class="second-title mb-4">Blogs</h2>
                        <div class="row">

                            {
                                myblog.map(td => (
                                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div class="card-blog">
                                            <div class="card-blog__img">
                                                <img src={td.image} alt="images" />
                                            </div>
                                            <div class="card-blog__text">
                                                <span class="title-blog">{td.titre}</span>
                                                <ul>
                                                    <li>
                                                        <img src="images/icon/user.svg" alt="icone" />
                                                        <span>{td.auteur.username}</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icon/calendar.svg" alt="icone" />
                                                        <span> {dateFrench(td.date_add)} </span>
                                                    </li>
                                                </ul>
                                                <p>
                                                    {td.description.substring(0, 150)} ...
                                                </p>
                                                <NavLink to={`/blog-detail/${td.id}`}>
                                                    <button type="button" class="btn-orange">Lire Plus</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Blog;