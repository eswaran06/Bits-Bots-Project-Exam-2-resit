import React from 'react';
import HeaderAndNavbar from '../../components/headerAndNavbar/HeaderAndNavbar'
import Footer from '../../components/footer/Footer'

const Conditions = () => {
    return (
        <div>
        <HeaderAndNavbar />
        <div className='container mt-5 mb-5 pb-5'>
            <h1 className='mb-4 text-center mt-5'>Conditions of use</h1>
            <p className='mb-5'>By using this website, you certify that you have read and reviewed Privacy policy and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. Bits&Bolts only grants use and access of this website, its products, and its services to those who have accepted its terms.</p>
        </div>
        <Footer/>
        </div>
    );
};

export default Conditions;