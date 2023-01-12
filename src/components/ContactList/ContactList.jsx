import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { Loader } from "components/Loader";
import { List, Item } from './ContactList.styled';
import { fetchContacts } from "redux/operations";
import { getContacts, getError, getIsLoading, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {isLoading && !error && <Loader/>}
      {error && <p>{error}</p>}
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