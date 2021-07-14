import React from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>Github</span>
                    </li>
                    <li>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>JS ES7</span>
                    </li>
                    <li>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>BDD</span>
                    </li>
                    <li>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>Methodes Agiles</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>Axios</span>
                    </li>
                    <li>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>React-router</span>
                    </li>
                    <li>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>Github</span>
                    </li>
                    <li>
                        <i>
                            <CheckBoxIcon fontSize="small"/>
                        </i>
                        <span>Github</span>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default OtherSkills;