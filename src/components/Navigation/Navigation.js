import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function Navigation() {
  return (
    <div>
      <NavLink to="/contacts">
        <Button variant="contained" color="primary">
          Contacts
        </Button>
      </NavLink>
    </div>
  );
}
