import React from 'react';
import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import DoctorList from '../../components/DoctorList/DoctorList';
import Specialities from '../../components/Specialities/Specialities';
import './Home.css'
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Specialities></Specialities>
            <DoctorList></DoctorList>
            <About></About>
        </div>
    );
};

export default Home;