import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { Contacs } from './Contacts/Contacts';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Phonebook } from './Phonebook/Phonebook';

const theme = {};

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    this.setState(prevState => {
      return { name: name, contacts: [...[name]] };
    });
  };

  addNewContact() {
    console.log(this.state);
  }
  // onChangeInput(event) {
  //   const contactName = event.target.value;
  //   console.log(contactName);
  //   return contactName;
  //   // this.setState(prevState => {});
  // }

  //Створюємо метод додавання контакту
  // addNewConract(event) {
  //   event.preventDefault();

  //   // const item = this.onChangeInput();
  //   // console.log(item);
  //   console.log('add');
  // }

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
            // onInput={event => {
            //   this.onChangeInput(event);
            // }}
          />
        </div>
        <Contacs title="contacts" items={this.state.contacts} />
      </ThemeProvider>
    );
  }
}
