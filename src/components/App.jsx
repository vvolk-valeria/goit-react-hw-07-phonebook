import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title } from './App.styled';

export function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />

      <ContactList />
    </Container>
  );
}
