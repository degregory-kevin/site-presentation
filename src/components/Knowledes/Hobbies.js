import React from 'react';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i><DesktopWindowsIcon size="small"/></i>
                    <span>Informatique</span>
                </li>
                <li className="hobby">
                    <i><MusicNoteIcon size="small"/></i>
                    <span>Musique</span>
                </li>
                <li className="hobby">
                    <i><SportsSoccerIcon size="small"/></i>
                    <span>Football</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;