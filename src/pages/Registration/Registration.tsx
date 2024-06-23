import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { z } from 'zod';
import { AuthLayout } from '../../components/AuthLayout/AuthLayout';
import { FormInputGroup } from '../../components/FormInputGroup/FormInputGroup';
import { useRegisterMutation } from '../../utils/api/AuthApi';
import { routePaths } from '../../utils/constants/routePaths';

import styles from './styles/index.module.css';

const signUpSchema = z
  .object({
    name: z
      .string({
        required_error: 'Поле обязательно к заполнению.',
        invalid_type_error: 'Имя должно быть строкой.',
      })
      .min(2, {
        message: 'Имя должно содержать не менее 2 символов.',
      }),
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
    confirmPassword: z
      .string({
        required_error: 'Поле обязательно к заполнению.',
      })
      .min(10, {
        message: 'Пароль должен содержать не менее 10 символов.',
      })
      .max(24, {
        message: 'Пароль должен содержать не более 24 символов.',
      }),
  })
  .refine(
    (form) => {
      return form.confirmPassword === form.password;
    },
    {
      message: 'Пароли не совпадают.',
      path: ['confirmPassword'],
    }
  );

type TFormInputs = z.infer<typeof signUpSchema>;

export function Registration() {
  const [registeration, { isSuccess, isError, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TFormInputs>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isSuccess) {
      navigate(`/${routePaths.auth.signIn}`);
    }
  }, [isSuccess, navigate]);

  const onSubmit: SubmitHandler<TFormInputs> = (data) => {
    registeration({
      email: data.email,
      password: data.password,
    });
    if (isError) {
      console.log(error);
    }
  };

  return (
    <AuthLayout title="Регистрация">
      <form
        id="user-reg-form"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        action="submit"
        noValidate
      >
        <FormInputGroup
          id="name"
          label="Имя"
          type="text"
          placeholder="Артур"
          error={errors.name?.message as string}
          inputProps={register('name')}
        />

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

        <FormInputGroup
          id="confirmPasswor"
          label="Подтвердите пароль"
          type="password"
          error={errors.confirmPassword?.message as string}
          inputProps={register('confirmPassword')}
        />
        <button
          className={styles.fromSubmitBtn}
          type="submit"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>
    </AuthLayout>
  );
}
