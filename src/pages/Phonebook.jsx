import { AddContactForm } from 'components/AddForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  console.log(contacts);
  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm />
      {contacts.length === 0 ? (
        <h2>No contacts yet</h2>
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />

          <ContactsList />
        </>
      )}
    </>
  );
};

// export default Phonebook;
