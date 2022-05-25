import React from 'react';
import { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import { Redirect, useHistory, useLocation } from 'react-router';
const LoginFrom = () => {
    const { signinwithpassword } = useFirebase();
    const [emails, setemail] = useState([]);
    const [passwords, setpassword] = useState([]);
    const getEmail = (e) => {
        setemail(e.target.value)
    }
    const getpassword = (e) => {
        setpassword(e.target.value)
    }
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/login';
    const loginHandeler = () => {
        signinwithpassword(emails, passwords).then(result => {
            history.push(redirect_uri.pathname);
        });
    }
    return (
        <div>
            <div>
                <div className='login-header'><h5>Acceder </h5><p>Para poder realizar una cita <br></br><strong>Ingresar con una cuenta de Google</strong></p></div>
                <FloatingLabel  style={{display: 'none' }}
                    controlId="floatingInput"
                    label="Correo"
                    className="mb-3"
                >
                    <Form.Control  style={{display: 'none' }} onBlur={getEmail} type="email" placeholder="name@example.com" />
                </FloatingLabel >
                <FloatingLabel  style={{display: 'none' }} controlId="floatingPassword" label="Password">
                    <Form.Control  style={{display: 'none' }} onBlur={getpassword} type="password" placeholder="Password" />
                </FloatingLabel>
                <Button variant="success"   style={{display: 'none' }} onClick={loginHandeler}>Login</Button>

            </div>
        </div>
    );
};

export default LoginFrom;