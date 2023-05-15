import PropTypes from 'prop-types';
import React from 'react';

const ContactList = props => {
  const { contacts, onDelete } = props;
  return ( 
  <div>
    <ul>
      {contacts.map(contact => (
        <li key={contact.number}>
          {contact.name}: <span>{contact.number}</span>
          <button type="button" onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  );
};

ContactList.propTypes = {
contacts: PropTypes.array.isRequired,
onDelete: PropTypes.func.isRequired,
};

export default ContactList;
