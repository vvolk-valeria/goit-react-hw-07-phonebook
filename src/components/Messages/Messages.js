import {Container, Text,TextError } from "./Messages.styled";

export const MessageNoContacts = () => {
    return <Container>
        <Text>No contacts yet.</Text>
    </Container>
};

export const MessageError = () => {
    return <Container>
        <TextError>Oops, something went wrong! Reload the page or try again later!</TextError>
    </Container>
};