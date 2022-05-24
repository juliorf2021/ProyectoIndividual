import React from 'react';
import './LoginPage.css';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import LoginFrom from './LoginFrom';
import { useState } from 'react';
import RegForm from './RegForm';
import { Redirect, useHistory, useLocation } from 'react-router';
import { useEffect } from 'react';
const LoginPage = () => {
    const { signinUsinggoogle, signinUsinggit, error, user } = useFirebase();
    const [isLogin, setIsLogin] = useState(false);
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked)
    }
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/login';
    const handelGooglelogin = () => {
        signinUsinggoogle().then(result => {
            history.push(redirect_uri.pathname);
        })
    }
    const handelGitlogin = () => {
        signinUsinggit().then(result => {
            history.push(redirect_uri.pathname);
        })
    }
    useEffect(() => {
        if (user.email) {
            history.push('/');
        }
    }, user.email)

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="account-contenet">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 col-lg-6 login-left">
                                    <img src="https://doccure-laravel.dreamguystech.com/template/public/assets/img/login-banner.png" alt="" className='img-fluid' />
                                </div>
                                <div className='col-md-12 col-lg-6 login-right'>
                                    {
                                        isLogin ? <RegForm></RegForm> : <LoginFrom></LoginFrom>
                                    }
                                   
                                    <hr />
                                    <Button  class="btn btn-success" onClick={handelGooglelogin}>Acceder con Google</Button>
                                    
                                    <hr />
                                    {error}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;