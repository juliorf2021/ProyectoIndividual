import React, { useEffect, useState } from 'react';
import './DoctorProfile.css';
import { useHistory, useParams } from 'react-router-dom';
import alldata from '../../Fakedata/data.json';
import { FcCurrencyExchange } from "react-icons/fc";
import { FaLocationArrow, FaStarOfDavid, FaPlusSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button'

const DoctorProfile = (props) => {
    const [profile, setProfile] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const currentprofile = alldata.find(data => data.id === id);
        setProfile(currentprofile);
    }, [])
    const { name, title, image, specialities, address, rating, price } = profile;
    const handelBooking = () => {

       // history.push('/booking-form')
       history.push(`/booking-form/${id}`)
    }
    return (
        <div className='container'>
            <div>
                <h5>Soicita y Agenda tu cita</h5>
                  
                
                   
                </div>
            <div className="row">
                <div className="col-md-12 p-4">
                    <div className="row bg-card">
                        <div className="col-md-4 col-lg-4 col-4 text-center custom-image">
                            <img src={image} alt="" className='img-fluid' />

                        </div>
                        <div className="col-md-6 col-lg-6 col-6">
                            <h3>{name}</h3>
                            <h5>{title}</h5>
                            <p><FaPlusSquare />{specialities}</p>
                          
                        </div>
                        <div className="col-md-2 col-lg-2 col-2">
                            <p> <FcCurrencyExchange /> S/. {price}</p>
                            <p><FaLocationArrow />  {address}</p>
                            <Button variant="primary" className='btn btn-custom-book' onClick={handelBooking}>Solicitar Cita</Button>
                        </div>

                    </div>

                  
                       
                </div>
            </div>
            <div>
                <h5>Condiciones y Politicas de Uso</h5>
                   <p>Los presentes Términos y Condiciones (en adelante, Términos y condiciones) regulan el uso de la plataforma de Médico a Domicilio (en adelante, la Plataforma), mediante el cual Clínica Internacional S.A. (en adelante, LA CLÍNICA) presta el servicio de Médico a Domicilio (en adelante, el Servicio).</p>
                
                   <p>El acceso y utilización de la Plataforma atribuye al visitante la condición de usuario (en adelante, el Usuario) e implica su declaración expresa de conocer y aceptar plenamente todas las disposiciones, normas, instrucciones, responsabilidades y políticas contenidas en los presentes Términos y Condiciones. En consecuencia, el Usuario debe leer detenidamente los presentes Términos y Condiciones cada vez que acceda a la Plataforma pues éstos podrían sufrir variaciones sin previo aviso.</p>
                </div>
        </div>
    );
};

export default DoctorProfile;