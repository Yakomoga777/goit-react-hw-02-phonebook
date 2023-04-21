import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { Contacs } from './Contacts/Contacts';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Phonebook } from './Phonebook/Phonebook';

const theme = {};

export class App extends Component {
  state = {
    contacts: [1, 2, 3],
    name: '',
  };

  onChangeInput(event) {
    const contactName = event.target.value;
    console.log(contactName);
    return contactName;
    // this.setState(prevState => {});
  }

  //Створюємо метод додавання контакту
  addNewConract(event) {
    event.preventDefault();

    // const item = this.onChangeInput();
    // console.log(item);
    console.log('add');
  }

  // Функція рендеру:
  render() {
    console.log(this.state.contacts);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Phonebook
            title="name"
            btn="Add contact"
            handleSubmit={() => {
              this.addNewConract();
            }}
            onInput={event => {
              this.onChangeInput(event);
            }}
          />
        </div>
        <Contacs title="contacts" items={this.state.contacts} />
      </ThemeProvider>
    );
  }
}
