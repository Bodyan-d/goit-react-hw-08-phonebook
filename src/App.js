import { useEffect } from 'react';
import auth from './components/redux/auth/auth-operation';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import * as options from './components/redux/phonebook/phonebook-options';
import './App.css';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppBar from './components/AppBar';
import Phonebook from './components/Phonebook';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(auth.currentUser());
    dispatch(options.fetchContacts());
  }, []);

  return (
    <div className="container">
      <AppBar />
      <Switch>
        <PrivateRoute path="/contacts">
          <Phonebook />
        </PrivateRoute>
        <PublicRoute path="/login" restricted>
          <Login />
        </PublicRoute>
        <PublicRoute path="/register" restricted>
          <Register />
        </PublicRoute>
        <Route path="/">
          {!isLoggedIn ? <Redirect to="/login" /> : <Redirect to="/contacts" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
