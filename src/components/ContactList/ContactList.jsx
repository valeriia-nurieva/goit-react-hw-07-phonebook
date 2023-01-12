import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { List, Item } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {contacts.length > 0 && getFilteredContacts().map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            <ContactItem name={name} id={id} number={phone} />
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;