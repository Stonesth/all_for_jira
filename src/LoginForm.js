import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/login', { username, password })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input id="email" type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}