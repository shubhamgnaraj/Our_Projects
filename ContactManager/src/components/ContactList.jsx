import React from "react";

function ContactList({ contacts }) {
  return (
    <div className="contact_list">
      <ul className="list-group">
        {contacts.map((contact) => (
          <li className="list-group-item" key={contact.number}>
            <div>{contact.userName}</div>
            <div>{contact.number}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
