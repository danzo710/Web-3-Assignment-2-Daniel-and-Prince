import { BrowserRouter } from "react-router";
import HeaderApp from "./components/header/headerApp";
import Router from "./routes/Router";
import { MainFooter } from "./components/mainFooter";
import { LoginProvider } from "./context/loginContext";
import { ProductsProvider } from "./context/productsContext";
import { CartProvider } from "./context/cartContext";
import { ShippingProvider } from "./context/shippingContext";
import { Toaster } from "@/components/ui/sonner";


function App() {
  return (
    <ShippingProvider>
      <ProductsProvider>
        <LoginProvider>
          <CartProvider>
            <ShippingProvider>
              <BrowserRouter basename="/web-3-assignment-2-daniel-and-prince">
                <HeaderApp />
                <Router />
                <MainFooter />
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
