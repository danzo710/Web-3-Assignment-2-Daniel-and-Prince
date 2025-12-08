import { BrowserRouter } from 'react-router';
import HeaderApp from './components/header/headerApp';
import Router from './routes/Router';
import { LoginProvider } from './context/loginContext';

function App() {
  return (
    <LoginProvider>
    <BrowserRouter>
      <HeaderApp />
      <Router />
    </BrowserRouter>
    </LoginProvider>
  );
}

export default App