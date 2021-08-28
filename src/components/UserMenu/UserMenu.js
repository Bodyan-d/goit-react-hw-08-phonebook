import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styles from './UserMenu.module.css';

export default function UserMenu({ email }) {
  return (
    <div className={styles.cont}>
      <Avatar alt="avatar" color="primary">
        <AccountCircle style={{ fontSize: 50 }} color="primary" />
      </Avatar>
      <p className={styles.email}>{email}</p>
      <Button variant="contained" color="primary" size="small">
        Log out
      </Button>
    </div>
  );
}
