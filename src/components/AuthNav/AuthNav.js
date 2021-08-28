import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonGroup, Button } from '@material-ui/core';

export default function AuthNav() {
  return (
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="text primary button group"
    >
      <Button>
        <NavLink to="/register">Register</NavLink>
      </Button>
      <Button>
        <NavLink to="/login">Login</NavLink>
      </Button>
    </ButtonGroup>
  );
}
