import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Project = ( {item}) => {
    return (
        <div className="project">
            <div className="icons">
                {item.languagesIcons.map(icon =>
                    <i classNme="fa fa-home" aria-hidden="true" key={icon.id}>{icon}</i>
                    )}
            </div>
           <h3>{item.name}</h3>
           <img src={item.picture} alt=""/>
           <span className="infos">
               <i>
                    <ExitToAppIcon/>
               </i>
           </span>

        </div>
    );
};

export default Project;