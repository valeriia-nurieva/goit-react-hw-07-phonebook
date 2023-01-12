import { useSelector } from 'react-redux';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Layout from '../Layout';
import GlobalStyle from '../GlobalStyle';
import Title from './App.styled';
import { Loader } from "components/Loader";
import { getError, getIsLoading } from 'redux/selectors';


const App = () => {
    const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <Layout>
      
      <Title>Phonebook</Title>
      <Form />
      <Title as="h2">Contacts</Title>
      <Filter />
      {isLoading && !error && <Loader/>}
      {error && <p>{error}</p>}
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};

export default App;
