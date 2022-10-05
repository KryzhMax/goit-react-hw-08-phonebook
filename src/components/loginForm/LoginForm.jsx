// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../../redux/auth/authOperations';

export const LoginForm = () => {
  // const [isLogFormShown, setIsLogFormShown] = useState(false);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    dispatch(login(data));
    reset();
  };

  // const closeForm = () => {
  //   console.log(isLogFormShown);
  //   setIsLogFormShown(false);
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button /*onClick={() => closeForm()}*/>Log In</button>
    </form>
  );
};
