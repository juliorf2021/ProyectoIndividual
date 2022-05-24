import React, { useEffect, useState } from 'react';
import ShowSpecialities from '../ShowSpecialities/ShowSpecialities';
import './Specialities.css'
const Specialities = () => {
    const [specialities, setSpecialities] = useState([]);
    useEffect(() => {
        fetch('../../Fakedata/data.json')
            .then(res => res.json())
            .then(data => setSpecialities(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center" id='Specialities'>
                    <h1>Nuestras Especialidades</h1>
                    <p>
                    Contamos con las principales especialidades médicas para brindarle un servicio adecuado, oportuno y de calidad a nuestros pacientes.<br />  un servicio adecuado, oportuno y de calidad a nuestros pacientes.
                    </p>
                </div>
            </div>
            <div className="row">
                {
                    specialities.slice(0, 4).map(specialities => <ShowSpecialities data={specialities} key={specialities.id}></ShowSpecialities>)
                }
            </div>
        </div>
    );
};

export default Specialities;