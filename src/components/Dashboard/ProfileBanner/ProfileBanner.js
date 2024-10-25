import React from 'react';
import styles from './ProfileBanner.module.css';
import profilePic from '../../../assets/profile-pic.png';

function ProfileBanner() {
  return (
    <div className={styles.banner}>
      {/* First row: Picture, Name, and Score */}
      <div className={styles.firstRow}>
        <div className={styles.leftSection}>
          <img src={profilePic} alt="Profile" className={styles.profilePic} />
          <div className={styles.details}>
            <h3>John Doe</h3>
          </div>
        </div>
        <div className={styles.rightSection}>
          <span className={styles.score}>85</span>
        </div>
      </div>

      {/* Second and third row: Labels and Values */}
      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <span className={styles.label}>Email:</span>
          <span className={styles.value}>john.doe@example.com</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Location:</span>
          <span className={styles.value}>New York, USA</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Phone:</span>
          <span className={styles.value}>+123456789</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Role:</span>
          <span className={styles.value}>Developer</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Joined:</span>
          <span className={styles.value}>Jan 2022</span>
        </div>

        <div className={styles.detailItem}>
          <span className={styles.label}>Followers:</span>
          <span className={styles.value}>150</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Following:</span>
          <span className={styles.value}>200</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Posts:</span>
          <span className={styles.value}>30</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Likes:</span>
          <span className={styles.value}>450</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Achievements:</span>
          <span className={styles.value}>5</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner;

