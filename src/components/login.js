import React, { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


import { login } from "../actions/auth";


// import Swal from 'sweetalert2'

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


const Login = (props) => {

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { success } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);


    const { user: currentUserLogin } = useSelector((state) => state.auth);

    console.log("Test content Login", currentUserLogin);

    console.log("Susuzoo", success);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault()

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    // props.history.push("/profile");
                    window.location.reload();
                })
                .catch(() => {

                    setLoading(false);

                });
        } else {
            setLoading(false);
            // Swal.fire({
            //     icon: 'error',
            //     title: `Verifier les données entrées`,
            //     width: 600,
            //     padding: '3em',
            //     backdrop: `
            //         rgba(0,0,123,0.4)
            //         left top
            //         no-repeat
            //     `
            // })
        }
    };
    // && currentUserLogin.success

    if (success && currentUserLogin.success) {
        return <Redirect to="/album" />;
    }


    return (
        <div class="body-login flex-center">
            <div class="box-login">
                <div class="box-login__illustration">
                    <img src="images/children-school.jpg" alt="" />
                </div>
                <div class="box-login__form">
                    <p class="box-logo text-center">
                        <a href="index.html"><img src="images/logo-nan.png" class="logo-site mb-2" alt="logo" /></a>
                    </p>
                    <h1 class="text-center mb-5">Crèche les lionceaux</h1>
                    <div class="mb-3">
                        <h2>Login <span class="dot"></span></h2>
                        <p>
                            Bienvenu(e) sur Cretch de la creme <br />
                            Authentifiez-vous :)
                        </p>
                    </div>
                    <Form ref={form}>
                        <div className="form-group">
                            <label htmlFor="identifiant">Identifiant</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="identifiant"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required]}
                                placeholder="AZERTY5112"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder=".........."
                                value={password}
                                onChange={onChangePassword}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn-orange" disabled={loading} onClick={(e) => handleLogin(e)}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>

                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton type="submit" style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                    <div class="copyright">
                        <small>&copy; 2021 - Tout Droit Reservé</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;