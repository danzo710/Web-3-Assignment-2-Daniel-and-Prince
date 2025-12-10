import { BrowserRouter } from "react-router";
import HeaderApp from "./components/header/headerApp";
import Router from "./routes/Router";
import { LoginProvider } from "./context/loginContext";
import { ProductsProvider } from "./context/productsContext";
import { CartProvider } from "./context/cartContext";
import { ShippingProvider } from "./context/shippingContext";
import { Toaster } from "@/components/ui/sonner";

import ShoppingCartApp from "./components/shoppingcart/shoppingcartApp";
import ShoppingCartBtn from "./components/shoppingcartbtn";
import { ShippingProvider } from "./context/shippingContext.jsx";
import ShoppingCartShipping from "./components/shoppingcart/shoppingcartShipping.jsx";
import { HomeView } from "./views/homeView.jsx";
import { AdminProductView } from "./views/adminProductView";
function App() {
  return (
    <ShippingProvider>
      <ProductsProvider>
        <LoginProvider>
          <CartProvider>
            <ShippingProvider>
              <BrowserRouter>
                <HeaderApp />
                <Router />
              </BrowserRouter>
              <Toaster />
            </ShippingProvider>
          </CartProvider>
        </LoginProvider>
      </ProductsProvider>
    </ShippingProvider>
  );
}

export default App;
