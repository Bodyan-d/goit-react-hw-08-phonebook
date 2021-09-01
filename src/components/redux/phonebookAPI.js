import axios from 'axios';

async function postContact({ name, number }) {
  const { data } = await axios
    .post('/contacts', {
      name,
      number,
    })
    .then(res => res)
    .catch(err => err);

  return data;
}

async function deleteContact(id) {
  const { data } = await axios
    .delete(`/contacts/${id}`)
    .then(res => res)
    .catch(err => err);
  return data;
}

async function fetchContacts() {
  const { data } = await axios.get('/contacts');

  return data;
}

const api = {
  postContact,
  fetchContacts,
  deleteContact,
};

export default api;
