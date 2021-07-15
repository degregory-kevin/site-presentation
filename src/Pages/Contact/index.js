import React from 'react';
import Navbar from '../../components/Navbar';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
        <Navbar/>
        <div className="contactContent">
            <div className="header">

            </div>
            <div className="contactBox">
                <h1>Contactez-moi</h1>
                <ul>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Bordeaux</span>
                    </li>
                    <li>
                        <i className="fas fa-mobile-alt"></i>
                        <CopyToClipboard text="0662223972">
                        <span className="clickInput"
                        onClick={() =>{
                            alert('Téléphone copié !')
                        }}
                        >06 62 22 39 72</span>
                        </CopyToClipboard>
                    </li>
                    <li>
                        <i className="far fa-envelope"></i>
                        <CopyToClipboard text="degregory.kevin@gmail.com">
                        <span className="clickInput"
                        onClick={() =>{
                            alert('E-mail copié !')
                        }}
                        >degregory.kevin@gmail.com</span>
                        </CopyToClipboard>
                    </li>
                </ul>
                </div>
                <div className="socialNetwork">
            <ul>
              
                <a href="https://www.linkedin.com/in/k%C3%A9vin-degregory-060919203/" target="_blank" rel="noopener noreferrer">
                    <h4>LinkedIn</h4>
                  <i className="fab fa-linkedin"></i>
                </a>
              
             
                <a href="https://github.com/degregory-kevin" target="_blank" rel="noopener noreferrer">
                <h4>Github</h4>
                <i i className="fab fa-github"></i>  
                </a>
              
                <a href="https://twitter.com/M4st3rKey" target="_blank" rel="noopener noreferrer">
                <h4>Twitter</h4>
                 <i className="fab fa-twitter"> </i>
                </a>
              
              
            </ul>
            </div>
        </div>
        
        </div>
    );
};

export default Contact;