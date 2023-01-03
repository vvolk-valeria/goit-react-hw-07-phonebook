import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import {
  FormContainer,
  Label,
  Btn,
  Input,
  ErrorInfo,
} from './ContactForm.styled';

import { getContacts } from '../../redux/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { addСontact } from '../../redux/contacsSlice';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(8).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorInfo>{message}</ErrorInfo>}
    />
  );
};

export const ContactForm = () => {
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    const ContactValue = value.name.toLowerCase();

    if (contacts.find(contact => contact.name.toLowerCase() === ContactValue)) {
      toast.error(`${ContactValue} is already in contacts.`);
      return;
    }

    const newContact = {
      id: 'id-' + nanoid(),
      name: value.name,
      number: value.number,
    };

    dispatch(addСontact(newContact));
    resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema}
      >
        <FormContainer autoComplete="off">
          <Label htmlFor="name">Name </Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError name="name" component="div" />
          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError name="number" component="div" />
          <Btn type="submit">Add contact</Btn>
        </FormContainer>
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
