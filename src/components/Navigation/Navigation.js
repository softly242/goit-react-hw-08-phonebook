import { NavLink } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';
import { Link, theme } from '@nextui-org/react';

const linkCss = {
  padding: '10px 20px',
  fontWeight: '500', color: 'black',
  transition: 'color, .2s',
  '&:hover': {
    color: theme.colors.blue700
  }
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link css={linkCss} block color="primary" as={NavLink} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link css={linkCss} to="/contacts" as={NavLink}>
          Contacts
        </Link>
      )}
    </nav>
  );
};
