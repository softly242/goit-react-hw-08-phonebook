import { Input, Container } from '@nextui-org/react';
import { setFilter } from 'redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const inputCss = {
  mb: '30px',
  width: '100%',
  margin: '10px 0',
};

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Container css={{maxWidth: '400px'}}>
      <Input
        type="tel"
        labelPlaceholder="Find contacts by name"
        color="default"
        underlined
        shadow={false}
        css={inputCss}
        value={filter}
        onChange={handleFilterChange}
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Container>
  );
}
