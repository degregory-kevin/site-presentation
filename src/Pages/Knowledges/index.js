import React from 'react';

import Navbar from '../../components/Navbar'
import Languages from '../../components/Knowledes/Languages'
import Formations from '../../components/Knowledes/Formations'
import Hobbies from '../../components/Knowledes/Hobbies'
import OtherSkills from '../../components/Knowledes/OtherSkills'
import Experiences from '../../components/Knowledes/Experiences'
import dataExperiences from '../../data/Experiences'
import dataFormations from '../../data/Formations'

const Knowledges = () => {
    return (
        <div className="knowledges" >
            <Navbar/>
            <div className="knowledgesContent">
                <Languages/>
                <Experiences 
                data={dataExperiences}
                />
                <OtherSkills/>
                <Hobbies/>
                <Formations
                data={dataFormations}
                />
            </div>
           
        </div>
    );
};

export default Knowledges;