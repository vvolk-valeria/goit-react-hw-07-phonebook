import { ContainerList, Item, Btn } from './ContactList.styled';
import { getContacts, getFilterValue } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteСontact } from '../../redux/contacsSlice';

export const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const filter = useSelector(getFilterValue);

  const findContact = (array, query) => {
    const queryValue = query.toLowerCase();

    return array.filter(arr => arr.name.toLowerCase().includes(queryValue));
  };

  const items = findContact(contacts, filter);

  return (
    <ContainerList>
      {items.map(item => {
        return (
          <Item key={item.id}>
            <p>{item.name}</p>
            <span>{item.number}</span>
            <Btn type="button" onClick={() => dispatch(deleteСontact(item.id))}>
              Delete
            </Btn>
          </Item>
        );
      })}
    </ContainerList>
  );
};
