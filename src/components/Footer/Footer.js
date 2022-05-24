import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import auna from '../../auna_white.png';
import { HashLink } from 'react-router-hash-link';
import { AiOutlineArrowRight } from "react-icons/ai";

import './Footer.css'
const Footer = () => {
    return (
        <div style = {{ marginTop : 50,backgroundColor: "#009ec2" }}>
            <div className="container" style = {{ marginTop : 50,backgroundColor: "#009ec2"}}>
            <div className="row" style = {{ padding : 50 }}>
                <div className="col-md-4">
                    <div>
                        <img src={auna} alt="" className='img-flude' />
                        <p>
                        Selecciona tu  médico, realiza una cita. Nosotros pensamos en tu Salud.
                        </p>

                    </div>
                </div>
                <div className="col-md-4">
                   
                </div>
               
            </div>
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                    <p>Make it Real Bootcamp.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;