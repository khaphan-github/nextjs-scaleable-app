"use client"
import React from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { loginByUserNamePasswordAction } from '../actions/login-by-username-password.action';

interface LoginFormInputs {
  username: string;
  password: string;
}

// Handle error and required fields
const resolver: Resolver<LoginFormInputs> = async (values) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors: Record<string, any> = {};
  if (!values.username) {
    errors.username = {
      type: "required",
      message: "Username is required.",
    };
  }
  if (!values.password) {
    errors.password = {
      type: "required",
      message: "Password is required.",
    };
  }
  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  };
};

export default function LoginForm({ redirect }: { redirect: string }) {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver,
    defaultValues: {
      username: 'NNV0050588',
      password: '123qwe@..'
    }
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    await loginByUserNamePasswordAction(data, redirect);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          {...register('username')}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password')}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
