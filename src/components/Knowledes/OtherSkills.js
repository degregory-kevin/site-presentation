import React from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {dataCompetences1, data4} from '../../data/Competences'
import { dataCompetences, data3 } from '../../data/Competences2'

const OtherSkills = () => {


    return (
        <div className="otherSkills">
            <h3>Compétences</h3>
            <div className="list">
                <ul>
                    {
                            dataCompetences1.map((competence) =>(
                                
                      <li key={competence.id}>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>{competence.title}</span>
                    </li>

                            ))
                    }
                                     
                </ul>
                <ul>
                    {
                            dataCompetences.map((competence) =>(
                                
                      <li key={competence.id}>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>{competence.title}</span>
                    </li>

                            ))
                    }
                                     
                </ul>
                <ul>
                    {
                            data3.map((competence) =>(
                                
                      <li key={competence.id}>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>{competence.title}</span>
                    </li>

                            ))
                    }
                                     
                </ul>
                <ul>
                    {
                            data4.map((competence) =>(
                                
                      <li key={competence.id}>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>{competence.title}</span>
                    </li>

                            ))
                    }
                                     
                </ul>
            </div>
            
        </div>
    );
};

export default OtherSkills;