"use client"
import React, { useState } from 'react';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginByUserNamePasswordAction(username, password, redirect);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};