import React from 'react';
import HeaderAndNavbar from '../../components/headerAndNavbar/HeaderAndNavbar'
import Footer from '../../components/footer/Footer'

const Investors = () => {
    return (
        <div>
            <HeaderAndNavbar />
            <div className='container mt-5 mb-5 pb-5'>
                <h1 className='mb-4 text-center mt-5'>Investors</h1>
            <p className='mb-5'>For more info about investment, pleas contact us.</p>
        </div>
        <Footer/>
        </div>
    );
};

export default Investors;