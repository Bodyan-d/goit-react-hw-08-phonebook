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
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const loggedIn = false;

  useEffect(() => {
    dispatch(options.fetchContacts());
  }, [dispatch]);

  const handleChange = e => {
    if (e.target.name === 'filter') {
      dispatch(action.filterContacts(e.target.value));
      return;
    }
    if (e.target.name === 'name') {
      setName(e.target.value);
      return;
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(options.postContacts({ name, number }));
    dispatch(options.fetchContacts());

    setName('');
    setNumber('');
  };

  const handleFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteItem = async e => {
    const { id } = e.target;

    await dispatch(options.deleteContact(id));
    dispatch(options.fetchContacts());
  };

  return (
    <div className="container">
      <AppBar />
      <Switch>
        <Route exact path="/">
          {!loggedIn ? <Redirect to="/login" /> : <Redirect to="/contacts" />}
        </Route>
        <Route path="/contacts">
          <Phonebook
            name={name}
            number={number}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            filter={filter}
            contacts={handleFilter()}
            deleteItem={deleteItem}
          />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
