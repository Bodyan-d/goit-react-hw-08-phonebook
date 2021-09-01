import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const profile = localStorage.getItem('persist:root');
console.log(JSON.parse(profile));

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getCurrentUser = 'https://connections-api.herokuapp.com/users​/current';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const currentUser = createAsyncThunk('auth/current', async credential => {
  try {
    console.log('her');
    const { data } = await axios.get(`${getCurrentUser}`, {
      headers: { Authorization: `Bearer ${JSON.parse(profile)?.token}` },
    });
    token.set(data.token);
    console.log(data);
  } catch (error) {}
});

const register = createAsyncThunk('auth/register', async credential => {
  try {
    console.log(credential);
    const { data } = await axios.post('/users/signup', credential);
    token.set(data.token);
    return data;
  } catch (error) {
    return new Error(error);
  }
});

const login = createAsyncThunk('auth/login', async credential => {
  try {
    console.log(credential);
    const { data } = await axios.post('/users/login', credential);
    token.set(data?.token);
    return data;
  } catch (error) {
    return new Error(error);
  }
});

const logout = createAsyncThunk('auth/logout', async credential => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

const auth = {
  register,
  logout,
  login,
  currentUser,
};

export default auth;
