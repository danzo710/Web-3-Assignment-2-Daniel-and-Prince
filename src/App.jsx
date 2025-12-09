import { BrowserRouter } from "react-router";
import HeaderApp from "./components/header/headerApp";
import Router from "./routes/Router";
import { LoginProvider } from "./context/loginContext";
import SalesDashboard from "./components/dashboard/salesDashboard";
import SingleProductApp from "./components/singleproductview/singleproductApp";
import SingleProductNav from "./components/singleproductview/singleproductNav";
function App() {
  return (
    <>
      {/* <LoginProvider>
        <BrowserRouter>
          <HeaderApp />
          <Router />
        </BrowserRouter>
      </LoginProvider> */}
      <SingleProductApp />
    </>
  );
}

export default App;
