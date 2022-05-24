import React, { useEffect, useState } from 'react';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const DoctorList = () => {
    const [doctors, setdoctors] = useState([]);
    useEffect(() => {
        fetch('../../Fakedata/data.json')
            .then(res => res.json())
            .then(data => setdoctors(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center" id='Doctor'>
                    <h1>Especialistas a tu Servicio
                    </h1>
                    <p>
                        Los mejores Especialistas al cuidado de tu Salud.
                    </p>
                </div>
            </div>
            <div className="row">
                {
                    doctors.slice(0, 4).map(doctor => <DoctorsCard key={doctor.id} data={doctor}></DoctorsCard>)
                }
            </div>
        </div>
    );
};

export default DoctorList;