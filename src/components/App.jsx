import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { nanoid } from 'nanoid';

import { Contacs } from './Contacts/Contacts';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Phonebook } from './Phonebook/Phonebook';

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
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    // console.log(event.target.elements[name]);
    const number = form.elements.number.value;
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

  handleChangeName = evt => {
    this.setState({ name: evt.target.value });
  };
  handleChangeNumber = evt => {
    this.setState({ number: evt.target.value });
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

  // Функція рендеру:
  render() {
    console.log(this.state);

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Phonebook
            title="name"
            btn="Add contact"
            handleSubmit={event => {
              this.handleSubmit(event);
            }}
            valueName={this.state.name}
            valueNumber={this.state.number}
            onNameInput={event => {
              this.handleChangeName(event);
            }}
            onNumberInput={event => {
              this.handleChangeNumber(event);
            }}
          />
        </div>
        <Contacs
          title="contacts"
          items={this.filtersContacts()}
          // onFilterInput={this.onFilter()}
          valuefilter={this.state.filter}
          onFilterInput={event => {
            this.handleChangeFilter(event);
          }}
        />
      </ThemeProvider>
    );
  }
}
