import { useDispatch, useSelector } from 'react-redux';
import {
  ContactsListWrapper,
  DelBtnStyled,
  StyledContact,
} from './ContactsList.styled';

import { selectFilteredContacts } from 'redux/contacts/selectors';
import { delContact } from 'redux/contacts/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();

  // console.log(contacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ContactsListWrapper>
      {filteredContacts.map(contact => (
        <StyledContact key={contact.id}>
          {contact.name}:{contact.number}
          <DelBtnStyled
            onClick={() => {
              dispatch(delContact(contact.id));
            }}
          >
            Delete
          </DelBtnStyled>
        </StyledContact>
      ))}
    </ContactsListWrapper>
  );
};
