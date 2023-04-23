import React, { Component } from 'react';

export class Phonebook extends Component {
  render() {
    const {
      title,
      btn,
      handleSubmit,
      onNameInput,
      valueName,
      onNumberInput,
      valueNumber,
    } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={valueName}
            onChange={onNameInput}
          />
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={valueNumber}
            onChange={onNumberInput}
          />
          <button type="submit">{btn}</button>
        </form>
      </div>
    );
  }
}
