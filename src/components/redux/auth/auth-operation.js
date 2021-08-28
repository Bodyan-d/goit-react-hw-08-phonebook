import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credential => {
  try {
    const { data } = await axios.post('/register', credential);
    return data;
  } catch (error) {}
});

// async function postContact({ name, number }) {
//   console.log(name, number);

//   const { data } = await axios
//     .post('/contacts', {
//       name,
//       number,
//     })
//     .then(res => res)
//     .catch(err => err);

//   return data;
// }

// async function deleteContact(id) {
//   const { data } = await axios
//     .delete(`/contacts/${id}`)
//     .then(res => res)
//     .catch(err => err);
//   return data;
// }

// async function fetchContacts() {
//   const { data } = await axios.get('/contacts');

//   return data;
// }

const auth = { register };

export default auth;
