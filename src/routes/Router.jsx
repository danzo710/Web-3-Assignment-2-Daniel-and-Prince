import { Routes, Route } from 'react-router';
import {HomeView} from '../views/homeView';
import {LoginView} from '../views/loginView';
import {BrowseView} from '../views/browseView';
import { GenderView } from '../views/genderView';
import SalesDashboard from '../components/dashboard/SalesDashboard';
import SingleProductApp from '../components/singleproductview/singleproductApp';
import ShoppingCartApp from '../components/shoppingcart/shoppingcartApp';
import { ShippingProvider } from "../context/shippingContext";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={< HomeView />} />
      <Route path="/login" element={< LoginView />}/>
      <Route path="/browse" element={< BrowseView />}/>
      <Route path="/product/men" element={<GenderView gender="mens" />} />
      <Route path="/product/women" element={<GenderView gender="womens" />} />
      <Route path="/dashboard/sales" element={<SalesDashboard />} />
      <Route path="/product/:id" element={<SingleProductApp />} />
      <Route path="/cart" element={<ShippingProvider><ShoppingCartApp /></ShippingProvider>}/>
    </Routes>
  );
};

export default Router;