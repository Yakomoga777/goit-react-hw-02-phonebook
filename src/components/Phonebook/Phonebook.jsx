import React, { Component } from 'react';

export class Phonebook extends Component {
  render() {
    const { title, btn, handleSubmit, onInput } = this.props;
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
            onChange={onInput}
          />
          <button type="submit">{btn}</button>
        </form>
      </div>
    );
  }
}
