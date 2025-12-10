import { BrowserRouter } from "react-router";
import HeaderApp from "./components/header/headerApp";
import Router from "./routes/Router";
import { LoginProvider } from "./context/loginContext";
import { ProductsProvider } from "./context/productsContext";
import { CartProvider } from "./context/cartContext";
import { ShippingProvider } from "./context/shippingContext";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
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
  );
}

export default App;
