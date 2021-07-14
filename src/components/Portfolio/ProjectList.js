import React from 'react';
import {portfolioData} from '../../data/portfolio'
import Project from './Project';


const ProjectList = () => {
    return (
        <div className="portfolioContent">
            <ul className="radioDisplay">

            </ul>

            <div className="projects">
                {
                    portfolioData.map(item => {
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