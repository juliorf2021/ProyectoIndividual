import React from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import { useState } from 'react';
import { collection, addDoc } from "@firebase/firestore"
const BookingForm = () => {
    const { user, } = useAuth();
    const { signinUsinggoogle, signinUsinggit, error, db } = useFirebase();
    const [message, setMessage] = useState("");
    const [texto, setTexto] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

  async function sendMessage(e) {
    e.preventDefault()
    

    await addDoc(collection(db, "messages"), {
      text: message,
      paciente: user.displayName,
      correo: correo,
      to: "whatsapp:+51938763912",
      body: message,
      telefono: telefono,
      createdAt: new Date(),
    })
    setMessage("")
  }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://doccure-laravel.dreamguystech.com/template/public/assets/img/login-banner.png" alt="" className='img-fluid' />

                </div>
                <div className="col-md-6">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Paciente" value={user.displayName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="number" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)}
        value={telefono} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="nombre@correo.com"  onChange={(e) => setCorreo(e.target.value)}
        value={correo}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control type="text"  onChange={(e) => setMessage(e.target.value)}
        value={message} />
                        </Form.Group>
                        
                        <Button variant="primary" onClick={sendMessage}>Registrar Cita</Button>
                    </Form>
                </div>

                
            </div>
        </div>
    );
};

export default BookingForm;