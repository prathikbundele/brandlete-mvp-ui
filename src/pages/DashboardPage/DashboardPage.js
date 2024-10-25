import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard/Dashboard';
import styles from './DashboardPage.module.css';

function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <Dashboard />
    </div>
  );
}

export default DashboardPage;
