import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { selectIsLoading } from '../redux/contacts/contactsSelectors';
import { Text } from '@nextui-org/react';

export default function ContactsView() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>

      <ContactForm />
      <Text h2 css={{textAlign: 'center', mt: '50px', mb: '70px'}}>Contacts</Text>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <Contacts />
      
    </>
  );
}
