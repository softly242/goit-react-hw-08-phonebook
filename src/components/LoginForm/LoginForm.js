import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import css from '../RegisterForm/RedisterForm.module.css';

import { Button, Input } from '@nextui-org/react';
import { selectIsLoginError } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inputCss = {
  mb: '30px',
};


export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoginError = useSelector(selectIsLoginError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  useEffect(() => {
    console.log('call', isLoginError)
    isLoginError && toast("Wrong password or email");
  }, [isLoginError]);

  return (
    <form className={`${css.form} ${css['tilt-in-fwd-tr']}`} onSubmit={handleSubmit} autoComplete="off">
        <Input
        type="text"
        name="email"
        required
        labelPlaceholder="Email"
        status="secondary"
        fullWidth
        css={inputCss}
      />
      <Input
        type="password"
        name="password"
        required
        labelPlaceholder=" Password"
        status="secondary"
        fullWidth
        css={inputCss}
      />
      
     <Button
        type="submit"
        auto
        rounded
        ripple={false}
        size="md"
        css={{
          background: '$white',
          fontWeight: '$semibold',
          boxShadow: '$md',
          position: 'relative',
          overflow: 'visible',
          color: '#0F9549',
          px: '$18',
          mx: 'auto',
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '$white',
            opacity: 1,
            borderRadius: '$pill',
            transition: 'all 0.4s ease',
          },
          '&:hover': {
            transform: 'translateY(-5px)',
            '&:after': {
              transform: 'scaleX(1.5) scaleY(1.6)',
              opacity: 0,
            },
          },
          '&:active': {
            transform: 'translateY(-2px)',
          },
        }}
      >
       Log In
      </Button>
     
    </form>
  );
};
