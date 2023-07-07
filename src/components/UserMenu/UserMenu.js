import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { useAuth } from 'components/hooks/useAuth';
import css from './UserMenu.module.css';
import { Button } from "@nextui-org/react";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button color="secondary" auto ghost type="button" onClick={() => dispatch(logOut())}>
      Logout
        </Button>
    </div>
  );
};