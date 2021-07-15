/* eslint-disable array-callback-return */
import React from 'react';
import {portfolioData, radios} from '../../data/portfolio'
import Project from './Project';
import { useState } from "react"


const ProjectList = () => {

    const [radio, setRadio] = useState('javascript')
    const [selectedRadio, setSelectedRadio] = useState('javascript')

    const handleRadio = (event) =>{ 
        let radio = event.target.value

       return (
           radio ? setRadio(radio) : setRadio(radio),
           setSelectedRadio(radio)
           
        )  
           

    }
    console.log(radio)
    return (
        <div className="portfolioContent">
            <ul className="radioDisplay">
                {
                    radios.map((radio) => {
                        return( 
                            <li key={radio.id}>
                                <input
                                type="radio"
                                name="radio"
                                checked={radio.value === selectedRadio}
                                value={radio.value}
                                id={radio.value}
                                onChange={handleRadio}
                                />
                                <label htmlFor={radio.value}>
                                {radio.value}
                                </label>
                              
                            </li>
                        )
                    })
                }
            </ul>

            <div className="projects">
                {
                    portfolioData
                    .filter(item => item.languages.includes(selectedRadio))
                    .map(item => {
                        return (
                            <Project
                            kev={item.id}
                            item={item}
                            />
                        )
                    })
                }
            </div>
        
        </div>
    );
};

export default ProjectList;