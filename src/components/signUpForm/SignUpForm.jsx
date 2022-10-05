import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { register as authRegister } from '../../redux/auth/authOperations';
import s from './SignUpForm.module.css';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    dispatch(authRegister({ email, password, name }));
    reset();
  };

  return (
    <>
      <Form.Group>
        <Form.Label>
          Your Name:
          <Form.Control
            className={s.signUpInput}
            onInput={e => setName(e.target.value)}
            {...register('name', { required: true })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name?.type === 'required' && (
            <p role="alert">Name is required</p>
          )}
        </Form.Label>
        <Form.Label>
          Your Email:
          <Form.Control
            className={s.signUpInput}
            onInput={e => setEmail(e.target.value)}
            {...register('email', { required: 'Email Address is required' })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
        </Form.Label>
        <Form.Label>
          Your Password:
          <Form.Control
            className={s.signUpInput}
            onInput={e => setPassword(e.target.value)}
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password?.type === 'required' && (
            <p role="alert">Password is required</p>
          )}
        </Form.Label>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Register
        </Button>
      </Form.Group>
    </>
  );
};
