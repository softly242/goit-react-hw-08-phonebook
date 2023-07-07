import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import css from './RedisterForm.module.css';
import { Button, Input } from '@nextui-org/react';

const inputCss = {
  mb: '30px',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      className={`${css.form} ${css['tilt-in-fwd-tr']}`}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Input
        type="text"
        name="name"
        required
        labelPlaceholder="Username"
        status="secondary"
        fullWidth
        css={inputCss}
      />
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
        labelPlaceholder="Password"
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
        Register
      </Button>
    </form>
  );
};
