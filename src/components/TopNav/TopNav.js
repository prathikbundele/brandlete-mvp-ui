import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import styles from './TopNav.module.css';
import profilePic from '../../assets/profile-pic.png';

const TopNav = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const onSignout = () => {
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={profilePic} alt="Profile" className='profile-pic' />
                </div>
                <div className={styles.navLinks}>
                    <Link
                        to="/profile"
                        className={`${styles.navLink} ${location.pathname === '/profile' ? styles.active : ''}`}
                    >
                        Profile
                    </Link>
                    <Link
                        to="/dashboard"
                        className={`${styles.navLink} ${location.pathname === '/dashboard' ? styles.active : ''}`}
                    >
                        Dashboard
                    </Link>
                </div>
                <div className={styles.profileMenu}>
                    <a className={styles.profileIcon} onClick={onSignout}>Logout</a>
                </div>
            </nav>
        </>
    )
}

export default TopNav;