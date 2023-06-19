'use client';
import React from 'react';
import { selectUserToken } from '../lib/redux/modules/auth/selectors';

import styles from './Dashboard.module.css';

const Dashboard = () => {
  const token = selectUserToken();

  return <div className={styles.MainContent}>{token}</div>;
};

export default Dashboard;
