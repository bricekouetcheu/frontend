import React, { Component } from 'react';
import {Link ,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

//services
import {loginService} from '../../store/actions/auth'

//Components
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Footer} from '../../components/footer/Footer'
import {Loader} from '../../components/loader/Loader'

//Images
import ChildrenSchool from "../../assets/images/children-school.jpg"
import Logo from "../../assets/images/logo-nan.png"



class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : ""
        }
    }


    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        
        const data = {
            username,
            password
        }
        this.props.loginService(data)
        
    }
    render() {
        const {username,password} = this.state
        

        let authRedirect = null
        if(this.props.auth.token){
            authRedirect = <Redirect to="/" />
        }
        return (
            <>
            <div className="body-login flex-center">
                <div className="box-login">
                    <div className="box-login__illustration">
                        {/* <iframe src="https://youtu.be/NIk1-ck4c6Q" frameborder="0"></iframe> */}
                        <img src={ChildrenSchool} alt="" />
                    </div>
                    <div className="box-login__form">
                        <p className="box-logo text-center">
                            <a href="index.html"><img src={Logo} className="logo-site mb-2" alt="logo" /></a>
                        </p>
                        <h1 className="text-center mb-5">Crèche les lionceaux</h1>
                        <div className="mb-3">
                            <h2>Login <span className="dot"></span></h2>
                            <p>
                                Bienvenu(e) sur Cretch de la creme <br/>
                                Authentifiez-vous :
                            </p>
                        </div>
                        <form className="form-login" onSubmit={this.handleSubmit}>
                            <label htmlFor="identifiant">Identifiant</label>
                            <input type="text" id="identifiant" required placeholder="AZERTY5112"  value={username}  onChange={(e) => this.setState({username : e.target.value})}/>
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" id="password" required placeholder=".........."  value={password} onChange={(e) => this.setState({password : e.target.value})}/>
                            {this.props.auth.pending ? 
                                <Loader/> : 
                                <>
                                    <button type="submit" className="btn-orange" >Connexion</button>
                                    <Link to="/">
                                        <button type="button" className="ml-2 btn-orange">Acceuil</button>
                                    </Link>  
                                </>  
                            }

                            {this.props.auth.error ? <p style={{color : 'red',fontSize : '12px'}}>{this.props.auth.error}</p> : null}
                        </form>
                        <div className="copyright">
                            <small>&copy; 2021 - Tout Droit Reservé</small>
                        </div>
                    </div>
                </div> 
            </div>
            {authRedirect}
            </>
        );
    }
}

const mapStateToProps = state => ({auth : state.auth})
const mapDispatchToProps = dispatch => ({
    loginService : (data) => dispatch(loginService(data))
})


export default  connect(mapStateToProps,mapDispatchToProps)(Login);