import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

export default function Phonebook({
  name,
  number,
  handleChange,
  handleFilter,
  handleSubmit,
  filter,
  deleteItem,
}) {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <h2>Contacts</h2>
      {/* <Filter filter={filter} handleChange={handleChange} /> */}
      {/* <ContactList contacts={handleFilter()} deleteItem={deleteItem} /> */}
    </div>
  );
}
