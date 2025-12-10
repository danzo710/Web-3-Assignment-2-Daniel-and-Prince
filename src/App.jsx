import { BrowserRouter } from "react-router";
import HeaderApp from "./components/header/headerApp";
import Router from "./routes/Router";
import { LoginProvider } from "./context/loginContext";
import { ProductsProvider } from "./context/productsContext";
import ShoppingCartApp from "./components/shoppingcart/shoppingcartApp";
import ShoppingCartBtn from "./components/shoppingcartbtn";
import { ShippingProvider } from "./context/shippingContext.jsx";
import ShoppingCartShipping from "./components/shoppingcart/shoppingcartShipping.jsx";
import { HomeView } from "./views/homeView.jsx";
import { AdminProductView } from "./views/adminProductView";
function App() {
  return (
    <>
      <ShippingProvider>
        <ProductsProvider>
          <LoginProvider>
            <BrowserRouter>
              <HeaderApp />
              <Router />
            </BrowserRouter>
          </LoginProvider>
        </ProductsProvider>
      </ShippingProvider>
    </>
  );
}

export default App;
