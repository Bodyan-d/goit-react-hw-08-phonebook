import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <div className={styles.AppBar}>
      <Navigation />
      <AuthNav />
      <UserMenu email={'bogdan2005@gmail.com'} />
    </div>
  );
}
