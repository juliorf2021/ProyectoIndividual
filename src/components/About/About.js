import React from 'react';
import './About.css'
import { Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap'
const About = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Nuestros servicio</h1>
                    <p>
                        Te brindamos la Red de Profesionales mas Amplia<br /> que podra resolver tus consultas medicas.
                    </p>
                </div>
            </div>
            <div className="row m-5" id='about'>
                <div className="col-md-4 col-lg-4">
                    <CardGroup>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://medifab.dreamguystech.com/blue/assets/img/icon-02.png" />
                            <Card.Body>
                                <Card.Title>PASO 1
                                </Card.Title>
                                <Card.Text>
                                Busca a tu médico segun su especialidad, disponemos de los mejores prospectos a tu disposición.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </CardGroup>
                </div>
                <div className="col-md-4 col-lg-4">
                    <CardGroup>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://medifab.dreamguystech.com/blue/assets/img/icon-01.png" />
                            <Card.Body>
                                <Card.Title>PASO 2
                                </Card.Title>
                                <Card.Text>
                                   Envia una solicitud de Atencion para una pronta consulta. recibiras la comunicacion por medio de whatsapp
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
                <div className="col-md-4 col-lg-4">
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://medifab.dreamguystech.com/blue/assets/img/icon-03.png" />
                            <Card.Body>
                                <Card.Title>Paso 3
                                </Card.Title>
                                <Card.Text>
                                    Establece una comunicación con tu Doctor en menos de 24 horas,reserva tu cita. Pensamos en tu Salud.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>

            </div>
        </div>
    );
};

export default About;