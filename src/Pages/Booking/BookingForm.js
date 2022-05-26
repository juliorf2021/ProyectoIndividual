import React from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import { useState,useEffect } from 'react';
import alldata from '../../Fakedata/data.json';
import { useHistory, useParams } from 'react-router-dom';
import { collection, addDoc } from "@firebase/firestore"
const BookingForm = () => {

    const [profile, setProfile] = useState([]);
    const { name, title, image, specialities, address, rating, price } = profile;
    const { user, } = useAuth();
    const { signinUsinggoogle, signinUsinggit, error, db } = useFirebase();
    const [message, setMessage] = useState("");
    const [texto, setTexto] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dia, setDia] = useState("");
    const [hora, setHora] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const currentprofile = alldata.find(data => data.id === id);
        setProfile(currentprofile);
    }, [])

    console.log(name);

  async function sendMessage(e) {
    e.preventDefault()
    

    await addDoc(collection(db, "messages"), {
      text: message,
      paciente: user.displayName,
      correo: correo,
      to: "whatsapp:+51938763912",
      body: "Buen dia Dr "+name+" el Paciente *"+user.displayName+"* con el numero de contacto *"+telefono+"* desea una cita con fecha "+dia+" con el siguiente mensaje "+message,
      telefono: telefono,
      cita: dia,
      createdAt: new Date(),
    })
    setMessage("Mensajes enviado")
  }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://doccure-laravel.dreamguystech.com/template/public/assets/img/login-banner.png" alt="" className='img-fluid' />

                </div>
                <div className="col-md-6">
                    <p><h3>Ingresa tus datos y reserva tu cita</h3>
                    <span style={{color: "009ec2"}}>El Especialista <strong>Dr. {name}</strong>  se Pondra en Contacto con Usted a su numero <strong>Whatsapp</strong></span></p>
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
                            <Form.Label>Fecha de Cita</Form.Label>
                            <Form.Control type="date"   onChange={(e) => setDia(e.target.value)}
        value={dia}/>
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