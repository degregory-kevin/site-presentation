import React from 'react';

import Navbar from '../../components/Navbar'
import pdf from './CV-2021-KD.pdf'

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="homeContent">
                <div className="content">
                    <h1>Kévin Degregory</h1>
                    <h2>Développeur Web Junior JS REACT</h2>
                    <div className="pdf">
                        <a href={pdf} target="_blank" download>Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;