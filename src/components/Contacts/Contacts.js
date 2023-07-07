import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { useMemo } from 'react';
import { useEffect } from 'react';
import * as contactsOperation from '../../redux/contacts/contactsOperation';
import { Button } from '@nextui-org/react';
import { UserIcon } from './UserIcon';
import { Call, Profile } from 'iconsax-react';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, contacts]
  );

  const handleRemove = id => {
    dispatch(contactsOperation.deleteContacts(id));
  };

  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.contactsList}>
          {filteredContacts.map(({ id, name, number }) => (
            <li className={css.item} key={id}>
              <div className={css.info}>
                <span className={css.name}>
                  <Profile size="20" color="#7828C8"/>
                  {name}
                </span>
                <span className={css.phone}>
                  <Call size="18" color="#7828C8"/>
                  {number}
                </span>
              </div>
              <Button
                icon={<UserIcon fill="currentColor" />}
                color="error"
                flat
                type="button"
                name="delete"
                auto
                onClick={() => handleRemove(id)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
