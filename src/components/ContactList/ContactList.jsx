import { ContactItem } from 'components/ContactForm/ContactItem';
import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

export class ContactList extends Component {
  render() {
    const { items, handleDelete } = this.props;
    return (
      <>
        {/* <input
          type="text"
          name="filter"
          required
          value={value}
          onChange={onFilterInput}
        /> */}
        <ul>
          {items.map(item => {
            const { id } = item;
            return (
              <ContactItem
                key={id}
                id={item.id}
                name={item.name}
                number={item.number}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
