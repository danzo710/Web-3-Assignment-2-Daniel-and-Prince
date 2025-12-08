import { Routes, Route } from 'react-router';
import {HomeView} from '../views/homeView';
import {LoginView} from '../views/loginView';
import {BrowseView} from '../views/browseView';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={< HomeView />} />
      <Route path="/login" element={< LoginView />}/>
      <Route path="/browse" element={< BrowseView />}/>
      {/* <Route path="/dashboard/sales" element={}/>
      <Route path="/product/men" element={}/>
      <Route path="/product/woman" element={}/>
      <Route path="/cart" element={}/>
      <Route path="/product/single" element={}/>
      <Route path="about" element={}/> */}
    </Routes>
  );
};

export default Router;