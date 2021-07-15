/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useState } from "react"



const Project = ( {item}) => {

    const [popup, setPopup] = useState(false)

    
    function handlePopup() {
        popup ? setPopup(false) : setPopup(true)
      }
     
    return (
        <div className="project">
            <div className="icons">
                {item.languagesIcons.map(icon =>
                    <i className={icon} aria-hidden="true" key={icon.id}></i>
                    )}
            </div>
           <h3>{item.name}</h3>
           <a href={item.lien} target="_blank" rel="noreferrer">
           <img src={item.picture} alt="photo-projet"/>
           </a>
           <span className="infos">
                <a href={item.lien} target="_blank" rel="noreferrer"><i className="fas fa-desktop"></i></a> 
                <i className="fas fa-info-circle" onClick={handlePopup}></i> 
           </span>
           {
               popup  && (
                   <div className="showInfos">
                       <div className="infosContent">
                           <div className="head">
                               <h2>{item.name}</h2>
                                <div className="sourceCode">
                                    <a href={item.source} rel="noopener nereferrer noreferrer" className="button" target="_blank">Code source</a>
                                </div>
                           </div>
                           <p className="text">{item.info}</p>
                               <div className="button return" onClick={handlePopup}>Retourner sur la page</div>
                       </div>
                   </div>
               )
           }
        </div>
    );
};

export default Project;