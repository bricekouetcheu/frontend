import React from 'react';

import { Route, Switch } from "react-router-dom";


import Home from "./pages/index";
import Blog from "./pages/blog/blog";
// import Blog_detail from "./pages/blog/blog_detail";
import Adresse from './pages/adresse';
import Apropos from './pages/apropos';
import Contact from './pages/contact';
import Galerie from './pages/galerie';
import Horaire from './pages/horaire';
import Projet_pedagogie from './pages/projet_pedagogie';
import Login from './components/login';
import Blog_detail from './pages/blog/blog_detail';
import Album from './pages/album';


const BaseRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog-detail/:id" component={Blog_detail} />
            <Route exact path="/adresse" component={Adresse} />
            <Route exact path="/propos" component={Apropos} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/album" component={Album} />
            <Route exact path={"/album-detail/:slug"} component={Galerie} />
            <Route exact path="/horaire" component={Horaire} />
            <Route exact path="/projet" component={Projet_pedagogie} />
        </Switch>
    );
};

export default BaseRouter;