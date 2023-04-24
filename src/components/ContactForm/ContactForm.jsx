import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = evt => {
    this.setState({ name: evt.target.value });
  };
  handleChangeNumber = evt => {
    this.setState({ number: evt.target.value });
  };

  // reset = () => {
  //   this.setState({ ...INITIAL_STATE });
  //   console.log('чисто');
  // };

  render() {
    const { btn, handleSubmit } = this.props;

    // console.log(this.state);
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChangeNumber}
          />
          <button type="submit">{btn}</button>
        </form>
      </div>
    );
  }
}
