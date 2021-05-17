import React, { useEffect } from 'react';


import { useDispatch, useSelector } from "react-redux";
import {
    retrieveAlbum,
} from "../actions/album";



import { NavLink } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';

const Album = () => {

    const myalbum = useSelector(state => state.album);
    const dispatch = useDispatch();

    // console.log("Album", myalbum);

    useEffect(() => {
        dispatch(retrieveAlbum());
    });


    return (
        <>
            <Header />
            <main class="main">
                <Navbar />
                <div class="main__content">

                    <div class="box-galerie">
                        <div>
                            <h2 class="second-title mb-4">Album</h2>
                        </div>
                        <div class="row">
                            {
                                myalbum.map(t => (
                                    <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                                        <NavLink to={`/album-detail/${t.id}`} >
                                            <div class="card-album">
                                                <div class="card-album__img">
                                                    <img src="../images/c1.jpeg" alt="images" />
                                                </div>
                                                <div class="card-album__title">
                                                    <h4 class="four-title">{t.titre}</h4>
                                                </div>
                                            </div>
                                        </NavLink>
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

export default Album;