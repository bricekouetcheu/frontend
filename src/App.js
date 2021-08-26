import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

//services
import { isUserAuthenticated } from './store/actions/auth'
//Pages
import Home from './pages/home/Home'

import Agenda from './pages/agenda/Agenda'
import AjoutsAgenda from './pages/agenda/Ajouts'
import VueAgenda from './pages/agenda/VueAgenda'
import UpdateAgenda from './pages/agenda/Update'

import Galerie from './pages/galerie/Galerie'
import Albums from './pages/albums/Albums'
import AlbumsGalerie from './pages/albums/AlbumsGalerie'
import AjoutAlbum from './pages/albums/Ajout'


import Blog from './pages/blog/Blog'
import BlogDetails from './pages/blog/Details'
import AjoutBLog from './pages/blog/Ajout'
import UpdateBlog from './pages/blog/Update'

import Activites from './pages/activites/Activites'
import AjoutsActivite from './pages/activites/Ajouts'
import UpdateActivite from './pages/activites/Update'
import Contacts from './pages/contacts/Contacts'
import Login from './pages/login/Login'
import Address from './pages/address/Address'
import Horaires from './pages/horaires/Horaires'


class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.isUserAuthenticated()
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/agenda" component={Agenda} exact />
        <Route path="/add-agenda" component={AjoutsAgenda} exact />
        <Route path="/vue-agenda/:id" component={VueAgenda} exact />
        <Route path="/agenda-update/:id" component={UpdateAgenda} exact />
        <Route path="/galerie" component={Galerie} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blog/:slug" component={BlogDetails} exact />
        <Route path="/add-blog" component={AjoutBLog} exact />
        <Route path="/blog-update/:slug" component={UpdateBlog} exact />
        <Route path="/activity" component={Activites} exact />
          <Route path="/add-activity" component={AjoutsActivite} exact />
          <Route path='/activity-update/:id' component={UpdateActivite} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/address" component={Address} exact />
        <Route path="/horaires" component={Horaires} exact />
        <Route path="/albums" component={Albums} exact />
        <Route path="/albums-galerie/:id" component={AlbumsGalerie} />
        <Route path="/add-album" component={AjoutAlbum} exact />
      </Switch>
    );

  }

}

const mapStateToProps = (state) => ({
  auth: state.auth,
})
const mapDispatchToProps = dispatch => ({
  isUserAuthenticated: () => dispatch(isUserAuthenticated())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
