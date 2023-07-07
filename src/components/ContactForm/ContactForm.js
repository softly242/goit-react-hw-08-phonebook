import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from '@nextui-org/react';
import css from '../RegisterForm/RedisterForm.module.css';

import { addContacts } from 'redux/contacts/contactsOperation';
import { selectContacts } from '../../redux/contacts/contactsSelectors';

const inputCss = {
  mb: '30px',
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleAddContact = (name, number) => {
    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    dispatch(addContacts(newContact));
  };

  const validateForm = (name, number) => {
    const regexNumber =
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    const regexName =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    if (!regexNumber.test(number)) {
      alert(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      );
      return false;
    } else if (!regexName.test(name) || name.length < 2) {
      alert(
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'. Minimum 2 letters"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm(name, number)) {
      handleAddContact(name, number);
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <Input
        labelPlaceholder="Name"
        status="secondary"
        fullWidth
        type="text"
        value={name}
        onChange={handleChange}
        id={nameInputId}
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        css={inputCss}
      />

      <Input
        labelPlaceholder=" Number"
        status="secondary"
        fullWidth
        css={inputCss}
        type="tel"
        value={number}
        onChange={handleChange}
        id={numberInputId}
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button shadow color="secondary" auto type="submit">
      Add contact
        </Button>
    </form>
  );
}

ContactForm.propTypes = {
  handleAddContact: PropTypes.func,
};
/* export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const regexNumber = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    const regexName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    if (!regexNumber.test(this.state.number)) {
      alert('Phone number must be digits and can contain spaces, dashes, parentheses and can start with +');
      return;
    } else if (!regexName.test(this.state.name) || this.state.name.length < 2) {
      alert("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'. Minimum 2 letters");
      return;
    }
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form}>
        <label htmlFor={this.nameInputId} className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numberInputId} className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          className={css.button}
          type="submit"
          onClick={this.handleSubmit}
        >
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  handleAddContact: PropTypes.func,
};
 */
