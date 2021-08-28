import { TextField, Button } from '@material-ui/core';
import React from 'react';
import styles from './Login.module.css';

export default function Register() {
  return (
    <form
      noValidate
      autoComplete="off"
      style={{ width: 300, display: 'flex', flexDirection: 'column' }}
    >
      <TextField
        required
        id="standard-helperText"
        label="Name"
        helperText="Enter your name "
      />
      <TextField
        required
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <button className={styles.submitForm} type="submit">
        <Button variant="contained" color="primary" size="small">
          Submit
        </Button>
      </button>
    </form>
  );
}
