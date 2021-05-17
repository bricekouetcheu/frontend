import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { BrowserRouter as Router, } from "react-router-dom";

import SimpleReactLightbox from 'simple-react-lightbox'

import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";



// Fichier Routes
import BaseRouter from './routes'



function App() {

  // const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // sidebar responsive
    const btnMenu = document.querySelector('.btn-menu');
    const sideBar = document.querySelector('.main__sidebar');

    return btnMenu.addEventListener('click', () => {
      sideBar.classList.toggle('sidebar-responsive');
    })
  });







  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  // const logOut = () => {
  //   dispatch(logout());
  // };

  return (
    <SimpleReactLightbox>
      <Router history={history}>

        <BaseRouter />

      </Router>
    </SimpleReactLightbox>
  );
}

export default App;
