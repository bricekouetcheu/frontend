import React, { useState, useEffect } from 'react';


import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { retrieveAlbumDetail } from "../actions/album";
import AlbumService from "../services/album.service";



// Import SRLWrapper
import { SRLWrapper } from "simple-react-lightbox";


import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';

const Galerie = (props) => {

    console.log("Url Slug", props.match.params.slug);

    const { user: currentUser } = useSelector((state) => state.auth);


    const myGalerie = useSelector((state) => state.album);

    console.log('My Galeriel', myGalerie);

    // console.log("Test content", currentUser);

    const initialTutorialState = {
        slug: "",

    };
    const [currentTut, setCurrentTut] = useState(initialTutorialState);

    const dispatch = useDispatch();

    const getTut = slug => {
        AlbumService.getAlbum(slug)
            .then(response => {
                setCurrentTut(response.data);
                console.log("Data Galerie", response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getTut(props.match.params.slug);
    }, [props.match.params.slug]);



    useEffect(() => {
        dispatch(retrieveAlbumDetail(props.match.params.slug));
    });


    console.log("New Gar", currentTut.slug);


    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <Header />
            <main class="main">
                <Navbar />
                <div class="main__content">

                    <div class="box-galerie">
                        <div>
                            <h2 class="second-title mb-4"><NavLink to="/album">Galeries</NavLink></h2>
                        </div>
                        <SRLWrapper>
                            <div class="row">

                                {
                                    myGalerie.map(td => (
                                        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div class="galerie-item height-2">
                                                <a data-fancybox="gallery" href={td.image}>
                                                    <img src={td.image} alt="" />
                                                </a>
                                            </div>
                                        </div>

                                    ))
                                }

                            </div>
                        </SRLWrapper>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Galerie;