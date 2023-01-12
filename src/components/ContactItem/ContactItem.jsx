import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <Button
        type="button"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
