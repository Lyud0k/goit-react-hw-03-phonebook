// import { render } from '@testing-library/react';
import css from 'components/App.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  sameName = name => {
    return this.state.contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
  };

  clickPr = ({ name, number }) => {
    const id = nanoid();
    console.log(name);
    console.log(this.state.contacts);
    console.log(this.sameName(name));
    if (this.sameName(name)) {
      alert(`${name} is olready in contacts`);
    } else {
      this.setState({
        contacts: [...this.state.contacts, { id, name, number }],
        // contacts: [
        //   ...this.state.contacts,
        //   { name: this.state.name, number: this.state.number },
        // ],
      });
    }
  };

  findContacts = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  viewList = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsCon = JSON.parse(contacts);
    console.log(parsCon);
    if (parsCon) {
      this.setState({ contacts: parsCon });
    }
  }

  componentDidUpdate(pevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div className={css.boxAll}>
          <h1 className={css.textUp}>Phonebook</h1>
          <ContactForm onSubmit={this.clickPr} />

          <h2 className={css.textDown}>Contacts</h2>
          <Filter filter={this.state.filter} onChange={this.findContacts} />

          <ContactList
            contact={this.viewList()}
            deleteList={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
