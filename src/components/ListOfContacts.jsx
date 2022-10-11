import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItem,
  ContactsInfo,
  DeleteBtn,
} from './styles.styled';

export const ListOfContacts = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(item => {
        const { name, number, id } = item;
        return (
          <ContactsItem key={id}>
            <ContactsInfo>
              {name}: {number}
            </ContactsInfo>
            <DeleteBtn value={id} onClick={deleteContact} type="button">
              Delete
            </DeleteBtn>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

ListOfContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
