import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom' 
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store'




//IMPORT CSS
import './assets/css/bootstrap.min.css'
import './assets/css/dropzone.css'
import './assets/css/loader.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/css/owl.theme.default.min.css'
import './assets/css/loader.css'
import './assets/css/main.css'
import './assets/css/index.css'



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
