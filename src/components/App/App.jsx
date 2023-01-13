import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Layout from '../Layout';
import GlobalStyle from '../GlobalStyle';
import Title from './App.styled';
import { Loader } from 'components/Loader';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <Layout>
      <Title>Phonebook</Title>
      <Form />
      <Title as="h2">Contacts</Title>
      <Filter />
      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading && <ContactList />}
      <GlobalStyle />
    </Layout>
  );
};

export default App;
