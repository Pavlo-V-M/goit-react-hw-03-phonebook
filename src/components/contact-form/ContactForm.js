import React, { Component } from "react";
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    contactsNumber: '',
  }

  nameInputID = nanoid();
  numberInputID = nanoid();

  handleChange = event => {
    const {name, value} = event.currentTarget;

    this.setState({[name]: value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: this.state.name,
      number: this.state.contactsNumber,
    };

    this.props.onReceiver(newContact);
    // set-state cleaning after submit
    this.setState({
      name: '',
      contactsNumber: '',
    });
  };

  /* using react lifecycle methods */

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (contacts !== prevProps.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputID}>Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleChange}
                id={this.nameInputID}
              />
            </label>

            <label htmlFor={this.numberInputID}>Number
              <input
                type="tel"
                name="contactsNumber"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.contactsNumber}
                onChange={this.handleChange}
                id={this.numberInputID} 
              />
              
            </label>

            <button type="submit">Add contact</button>
          </form>
    );
  }
}

export default ContactForm;