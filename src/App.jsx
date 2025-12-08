import { BrowserRouter } from 'react-router';
import HeaderApp from './components/header/headerApp';
import Router from './routes/Router';
import { LoginProvider } from './context/loginContext';
import SalesDashboard from './components/dashboard/salesDashboard';

function App() {
  return (
    // <LoginProvider>
    // <BrowserRouter>
    //   <HeaderApp />
    //   <Router />
    // </BrowserRouter>
    // </LoginProvider>
    <SalesDashboard />
  );
}

export default App