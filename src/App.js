import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import * as action from './components/redux/phonebook/phonebook-actions';
import * as options from './components/redux/phonebook/phonebook-options';

import './App.css';
import AppBar from './components/AppBar';
import Phonebook from './components/Phonebook';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(options.fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <AppBar />
      <Switch>
        <Route path="/contacts">
          <Phonebook />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          {!isLoggedIn ? <Redirect to="/login" /> : <Redirect to="/contacts" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
