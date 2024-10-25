import React from "react";
import { Link } from 'react-router-dom';
import AcademicProfile from "../Profile/AcademicProfile/AcademicProfile";
import PersonalProfile from "../Profile/PersonalProfile/PersonalProfile";
import './SideNav.css';

const SideNav = ({ onNavClick }) => {
    return(
        <>
             <div className='sidebar'>
                    <div onClick={() => onNavClick('personal')} className='navLink'>Personal</div>
                    <div onClick={() => onNavClick('academic')} className='navLink'>Academic</div>
                    <div onClick={() => onNavClick('atheletic')} className='navLink'>Atheletic</div>
                    <div onClick={() => onNavClick('social')} className='navLink'>Social</div>
                    <div onClick={() => onNavClick('linkTree')} className='navLink'>Link Tree</div>
                    <div onClick={() => onNavClick('privacy')} className='navLink'>Privacy & Security</div>
                    <div onClick={() => onNavClick('settings')} className='navLink'>Settings</div>
            </div>
        </>
    )
}

export default SideNav;