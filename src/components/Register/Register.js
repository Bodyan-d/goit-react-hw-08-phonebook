import React from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from './Register.module.css';

export default function Register() {
  return (
    <form noValidate autoComplete="off" className={styles.registerForm}>
      <TextField required id="standard-required" label="Name" />
      <TextField required id="standard-required" label="Email" />
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
