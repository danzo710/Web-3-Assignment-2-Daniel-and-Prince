import { BrowserRouter } from 'react-router';
import HeaderApp from './components/header/headerApp';
import Router from './routes/Router';
import { LoginProvider } from './context/loginContext';
import { ProductsProvider } from './context/productsContext';

function App() {
  return (
    <ProductsProvider>
    <LoginProvider>
    <BrowserRouter>
      <HeaderApp />
      <Router />
    </BrowserRouter>
    </LoginProvider>
    </ProductsProvider>
  );
}

export default App