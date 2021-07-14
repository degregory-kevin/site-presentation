import React from 'react';

import Navbar from '../../components/Navbar'

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="homeContent">
                <div className="content">
                    <h1>Kévin Degregory</h1>
                    <h2>Développeur Web Junior JS REACT</h2>
                    <div className="pdf">
                        <a href="./media/CV-2021-KD" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;