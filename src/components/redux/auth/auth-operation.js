import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const { token } = localStorage.getItem('persist:root');
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenNow = {
  set(tokenNow) {
    axios.defaults.headers.post.Authorization = `Bearer ${tokenNow}`;
  },
  unset() {
    axios.defaults.headers.post.Authorization = ``;
  },
};

const register = createAsyncThunk('auth/register', async credential => {
  try {
    const { data } = await axios.post('/users/signup', credential);
    tokenNow.set(data.token);

    return data;
  } catch (error) {
    return new Error(error);
  }
});

const login = createAsyncThunk('auth/login', async credential => {
  try {
    const { data } = await axios.post('/users/login', credential);
    tokenNow.set(data.token);
    return data;
  } catch (error) {
    return new Error(error);
  }
});

const logout = createAsyncThunk('auth/logout', async credential => {
  try {
    await axios.post('/users/logout');
    tokenNow.unset();
  } catch (error) {}
});

const currentUser = createAsyncThunk('auth/current', async credential => {
  try {
    const { data } = await axios.get('/users​/current', {
      headers: { Authorization: `Bearer ${token}` },
    });
    tokenNow.set(data.token);
    console.log(data);
  } catch (error) {}
});

const auth = {
  register,
  logout,
  login,
  currentUser,
};

export default auth;
