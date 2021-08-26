import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



//services
import { logoutUser } from '../../store/actions/auth'

//Images
import LogoNan from '../../assets/images/logo-nan.png'
import Menu from '../../assets/images/icon/menu.svg'

class Header extends Component {
    constructor(props) {
        super(props);
    }


    handleLogout = async () => {
        await this.props.logoutUser()
        console.log(this.props)
    }

    render() {
        
        const { title } = this.props
        return (
            (
                <header className="header">
                    <div className="header__logo">
                        <img src={LogoNan} alt="logo site" />
                    </div>
                    <div class="header__title">
                        <h1>{title}</h1>
                    </div>
                    <div class="header__btn">
                        {this.props.auth.token ?
                            <div className="d-flex justify-content-center align-items-center">

                                <p className="mr-3">Bienvenu(e) <span className="font-weight-bold text-uppercase">{this.props.auth.username[0].username}</span></p>

                                <button type="button" className="btn-orange border-orange-header" onClick={this.handleLogout}>Déconnection</button>
                            </div>
                            :
                            <Link to="/login"><button type="button"
                                className="btn-orange border-orange-header">Connexion</button>
                            </Link>
                        }
                    </div>
                    <button type="button" className="btn-menu">
                        <img src={Menu} alt="" />
                    </button>
                </header>
            )
        )
    }
}
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)

