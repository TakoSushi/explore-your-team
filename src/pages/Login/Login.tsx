// import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';
import { AuthLayout } from '../../components/AuthLayout/AuthLayout';
import { FormInputGroup } from '../../components/FormInputGroup/FormInputGroup';
import { useLoginMutation } from '../../utils/api/AuthApi';

import styles from './styles/styles.module.css';

const signInSchema = z.object({
  email: z
    .string({
      required_error: 'Поле обязательно к заполнению.',
    })
    .email({
      message: 'Не верный формат почты.',
    }),
  password: z
    .string({
      required_error: 'Поле обязательно к заполнению.',
    })
    .min(10, {
      message: 'Пароль должен содержать не менее 10 символов.',
    })
    .max(24, {
      message: 'Пароль должен содержать не более 24 символов.',
    }),
});

type TFormInputs = z.infer<typeof signInSchema>;

function setLocalStorageToken(token: string) {
  localStorage.setItem('token', token);
}

export function Login() {
  const [login, { isLoading, isSuccess, isError, error, data }] =
    useLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TFormInputs>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isSuccess) {
      const token = data?.token;
      if (token) {
        setLocalStorageToken(token);
        navigate('/');
      }
    }
    if (isError) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const onSubmit: SubmitHandler<TFormInputs> = (formData) => {
    login(formData);
  };

  return (
    <AuthLayout title="Вход">
      <form
        id="user-reg-form"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        action="submit"
        noValidate
      >
        <FormInputGroup
          id="email"
          label="Электронная почта"
          type="text"
          placeholder="eve.holt@reqres.in"
          error={errors.email?.message as string}
          inputProps={register('email')}
        />
        <FormInputGroup
          id="password"
          label="Пароль"
          type="password"
          error={errors.password?.message as string}
          inputProps={register('password')}
        />
        <button
          className={styles.fromSubmitBtn}
          type="submit"
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
    </AuthLayout>
  );
}
