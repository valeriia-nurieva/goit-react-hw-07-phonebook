import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { List, Item } from './ContactList.styled';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, phone }) => {
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
