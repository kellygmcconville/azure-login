import React from 'react';
import { authContext } from './adalConfig';
import './App.css';

function App() {
  return (
    <div>
      <header>
        {!authContext.getCachedUser() &&
          <button onClick={() => authContext.login()}>Log In</button>
        }
        {
          authContext.getCachedUser() &&
          <button onClick={() => authContext.logOut()}>Logout</button>
        }
      </header>
      {
        authContext.getCachedUser() &&
        <div>
          <p>logged in.  access token is {localStorage.getItem('token')}</p>
          <p>user is {authContext.getCachedUser().userName}</p>
        </div>
      }
    </div>
  );
}

export default App;
