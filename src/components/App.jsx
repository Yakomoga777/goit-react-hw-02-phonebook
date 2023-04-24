import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const theme = {};
const INITIAL_STATE = {
  name: '',
  number: '',
};

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const IncludesName = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (IncludesName) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name: name,
          number: number,
          id: nanoid(),
        },
      ],
    }));

    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value });
    this.filtersContacts();
  };

  filtersContacts() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(item =>
      item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    // this.setState({ contacts: filteredContacts });
    console.log(filteredContacts);

    return filteredContacts;
  }

  //Метод видалення
  handleDelete(id) {
    // const { contacts } = this.state;
    this.setState(prevState => ({
      conntacts: this.conntacts.filter(contact => contact.id !== id),
    }));
    // console.log(contacts);
    // console.log(this.prevState.conntacts);
    console.log(id);
  }

  // Функція рендеру:
  render() {
    console.log(this.state);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <h1>Phonebook</h1>
          <ContactForm btn="Add contact" handleSubmit={this.handleSubmit} />
        </div>
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onFilterInput={this.handleChangeFilter}
        />
        <ContactList
          items={this.filtersContacts()}
          handleDelete={this.handleDelete}
          // onFilterInput={this.onFilter()}
        />
      </ThemeProvider>
    );
  }
}
