import React from 'react';
import HeaderAndNavbar from '../../components/headerAndNavbar/HeaderAndNavbar'
import Footer from '../../components/footer/Footer'

const PrivacyPolicy = () => {
    return (
        <div>
            <HeaderAndNavbar />
            <div className='container mt-5 mb-5 pb-5'>
            <h1 className='mb-4 text-center mt-5'>Privacy Policy</h1>                
            <p className='mb-5'>Before you continue using our website, we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.</p>
            <h1 className='mb-4 text-center mt-5'>Age restriction</h1>
            <p className='mb-5'>You must be at least 18 (eighteen) years of age before you can use this website. By using this website, you warrant that you are at least 18 years of age and you may legally adhere to this Agreement. [name] assumes no responsibility for liabilities related to age misrepresentation.</p>
            <h1 className='mb-4 text-center mt-5'>Intellectual property</h1>
            <p className='mb-5'>You agree that all materials, products, and services provided on this website are the property of Bits&Bolts, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the Bits&Bolts’s intellectual property in any way, including electronic, digital, or new trademark registrations.</p>
            <p className='mb-5'>You grant Bits&Bolts a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.</p>
            <h1 className='mb-4 text-center mt-5'>User accounts</h1>                
            <p className='mb-5'>As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.</p>
        </div>
        <Footer/>
        </div>
    );
};

export default PrivacyPolicy;