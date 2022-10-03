import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { register as authRegister } from '../../redux/auth/authOperations';

export const SignUpForm = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    dispatch(authRegister(data));
    reset();
  };

  const closeForm = () => {
    console.log(isFormShown);
    setIsFormShown(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Your Name:
        <input
          {...register('name', { required: true })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name?.type === 'required' && (
          <p role="alert">Name is required</p>
        )}
      </label>
      <label>
        Your Email:
        <input
          {...register('email', { required: 'Email Address is required' })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}
      </label>
      <label>
        Your Password:
        <input type="password" {...register('password', { required: true })} />
        {errors.password?.type === 'required' && (
          <p role="alert">Password is required</p>
        )}
      </label>
      <button onClick={() => closeForm()}>Register</button>
    </form>
  );
};
