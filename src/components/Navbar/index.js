import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';




const Navbar = () => {
    return (
        <div className="sidebar">
          <div className="id">
            <div className="idContent">
            <div
             className="user__avatar-container"
             style={{ 
                backgroundImage: `url("./media/avatar.jpg")`
             }}>
            </div>
              <h3>Kévin Degregory</h3>
            </div>
          </div>
          <div className="navigation">
            <ul>
              <li>
              <NavLink exact to='/' activeClassName="navActive">
               <i><HomeIcon/></i> <span>Acceuil</span> 
              </NavLink>
              </li>
              <li>
              <NavLink exact to='/Knowledges' activeClassName="navActive">
                <i><EqualizerIcon/></i> <span>Compétences</span>
              </NavLink>              
              </li>
              <li> 
              <NavLink exact to='/Portfolio' activeClassName="navActive">
               <i><ColorLensIcon/></i> <span>Portfolio</span> 
              </NavLink>
              </li>
              <li>
              <NavLink exact to='/contact' activeClassName="navActive">
                <i><PermContactCalendarIcon /></i> <span>Contact</span> 
              </NavLink>
              </li>              
            </ul>
          </div>
          <div className="socialNetwork">
            <ul>
              <li>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  <i><LinkedInIcon className="test"/></i>
                </a>
              </li>
              <li>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <i><GitHubIcon/></i>  
                </a>
              </li>
              <li>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                 <i> <TwitterIcon/></i>
                </a>
              </li>
              <li>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                 <i><LinkedInIcon/></i> 
                </a>
              </li>
            </ul>
            <div className="signature">
            <p>KevDeg - 2021</p>
          </div>
          </div>
          
          
        </div>
    );
};

export default Navbar;