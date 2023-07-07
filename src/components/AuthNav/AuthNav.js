import { NavLink } from 'react-router-dom';
import { Link, theme } from '@nextui-org/react';

const linkCss = {
  padding: '10px 20px',
  fontWeight: '500',
  color: 'black',
  transition: 'color, .2s',
  '&:hover': {
    color: theme.colors.green700,
  },
};

export const AuthNav = () => {
  return (
    <div>
      <Link css={linkCss} block color="success" as={NavLink} to="/register">
        {' '}
        Register
      </Link>
      <Link css={linkCss} block color="success" as={NavLink} to="/login">
        {' '}
        Log In
      </Link>
    </div>
  );
};
