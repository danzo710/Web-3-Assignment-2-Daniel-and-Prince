import { useContext } from 'react';
import { LoginContext } from '../context/loginContext';
import { useNavigate } from 'react-router'; 

const LoginView = () => {
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login();         // admin logged in
    navigate('/');   // redirect to Home
  };


  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" defaultValue="admin" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" defaultValue="password" />
        </label>
        <br />
        <button type="submit">Login</button>
        <button type="button">Register</button>
      </form>
    </div>
  );
};

export {LoginView};