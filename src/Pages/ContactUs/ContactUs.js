import React from 'react';
import './ContactUs.css';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
const ContactUs = () => {
    return (
        <div className='container'>
            <div className="row m-4">
                <div className="col-md-6">
                    <img className='img-fluid' src="https://doccure-laravel.dreamguystech.com/template/public/assets/img/login-banner.png" alt="" />
                </div>
                <div className="col-md-6">
                    <h1>Email us</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary">Send Email</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};
export default ContactUs;