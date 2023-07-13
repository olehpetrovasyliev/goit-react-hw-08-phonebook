import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phonebook.contacts.items;
export const selectLoading = state => state.phonebook.contacts.loading;
export const selectError = state => state.phonebook.contacts.error;

export const selectFilter = state => state.phonebook.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    )
);
