import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import s from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    dispatch(login({ email, password }));
    reset();
  };

  return (
    <Form.Group>
      <Form.Label>
        Your Email:
        <Form.Control
          className={s.loginInput}
          onInput={e => setEmail(e.target.value)}
          {...register('email', { required: 'Email Address is required' })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}
      </Form.Label>
      <Form.Label>
        Your Password:
        <Form.Control
          className={s.loginInput}
          onInput={e => setPassword(e.target.value)}
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password?.type === 'required' && (
          <p role="alert">Password is required</p>
        )}
      </Form.Label>
      <Button
        className={s.loginBtn}
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Log In
      </Button>
    </Form.Group>
  );
};
