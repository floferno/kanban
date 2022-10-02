import './App.css';
import { useState, useEffect } from 'react'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isRegistered, setRegistered] = useState(true)

  function toggleHaveAccount() {
    setRegistered((prevState => !prevState))
  }

  return (
    <div>
      {isLoggedIn ? <HomePage toggleHaveAccount={toggleHaveAccount} /> : <LoginPage toggleHaveAccount={toggleHaveAccount} />}
      {isRegistered ? <RegisterPage toggleHaveAccount={toggleHaveAccount} /> : <HomePage toggleHaveAccount={toggleHaveAccount} />}
    </div>
  );
}

export default App;
