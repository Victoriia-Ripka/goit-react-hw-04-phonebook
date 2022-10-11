import React, { Component } from 'react';
import { MyContactForm } from './Form';
import { Section } from './Section';
import { ListOfContacts } from './ListOfContacts';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const elements = JSON.parse(localStorage.getItem('contacts'));
    if (elements) {
      this.setState({ contacts: elements });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  hanlerSubmitForm = contact => {
    const a = this.state.contacts.find(
      item => item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    );
    if (!a) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = e => {
    let filteredArray = this.state.contacts.filter(
      item => item.id !== e.target.value
    );
    this.setState({ contacts: [...filteredArray] });
  };

  render() {
    const normalFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
    return (
      <>
        <Section title="Phonebook">
          <MyContactForm onSubmit={this.hanlerSubmitForm} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterContacts} />
          <ListOfContacts
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
