import { useEffect, useState } from 'react';
import axios, { checkUser, loginAD, logout } from '../../api/axios';
// import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

// Get the current URL
const currentUrl = window.location.href;

// Parse the URL and extract the query parameters
const urlSearchParams = new URLSearchParams(currentUrl.split('?')[1]);

// Get the token parameter value
const invalidRole = urlSearchParams.get('invalidRole');
const userInactive = urlSearchParams.get('userInactive');
if (invalidRole) {
  alert('Invalid role!');
  window.location.href = '/';
}
if (userInactive) {
  alert('User deleted!');
  window.location.href = '/';
}

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    // Here you can implement your login logic
    console.log('Email:', email);
    console.log('Password:', password);

    const data = await axios.post(
      `${API_URL}/api/v1/auth/login`,
      {
        email: `staff@blackbook`,
        password: 'blackbook@1',
      },
      {
        withCredentials: true,
      },
    );
    console.log(data);
  };

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      {/* <h2>{message}</h2> */}
      <button onClick={loginAD} style={{ background: 'green' }}>
        Login Azure
      </button>
      <button onClick={checkUser} style={{ background: 'green' }}>
        Check
      </button>
      <button onClick={logout} style={{ background: 'red' }}>
        Logout Azure
      </button>
      <div>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default HomePage;
