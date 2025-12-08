import { createContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {props.children}
    </LoginContext.Provider>
  );
};
export {LoginContext, LoginProvider}