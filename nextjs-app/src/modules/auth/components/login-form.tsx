"use client"
import React, { useState } from 'react';
import Form from 'next/form'
import { loginByUserNamePasswordAction } from '../actions/login-by-username-password.action';
/**
 * Handle login  by username and password
 * Then navigate to redirect route
 * @param param0 
 * @returns 
 */
export default function LoginForm({ redirect }: { redirect: string }) {
  const [username, setUsername] = useState('NNV0050588');
  const [password, setPassword] = useState('123qwe@..');

  return (
    <Form action={(e) => loginByUserNamePasswordAction(e, redirect)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </Form>
  );
};