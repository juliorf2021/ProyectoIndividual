import React from 'react';
import './ShowSpecialities.css'
const ShowSpecialities = (props) => {
    const { name, title, image, specialities } = props.data
    return (
        <div className='col-md-3 col-lg-3 text-center'>
            <div className='box-specialities'>
                <h3>{specialities}</h3>
            </div>
        </div>
    );
};

export default ShowSpecialities;