import { BrowserRouter } from 'react-router';
import HeaderApp from './components/header/headerApp';
import Router from './routes/Router';

function App() {
  return (
    <BrowserRouter>
      <HeaderApp />
      <Router />
    </BrowserRouter>
  );
}

export default App