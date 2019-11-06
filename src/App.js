import React from 'react';
import './App.css';
import { authContext } from './adalConfig';

function App() {
  return (
    <div>
      <header>
      <button onClick={() => authContext.login()}>Log In</button>
        <button onClick={() => authContext.logOut()}>Logout</button>
      </header>
      <p>logged in.  access token is {localStorage.getItem('token')}</p>
    </div>
  );
}

export default App;
