import HeaderBar from './headerBar';
import HeaderMenu from './headerMenu';
import HeaderActions from './headerActions';

const HeaderApp = ({ isAdmin, cartCount }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">

      <HeaderBar />

            <HeaderMenu isAdmin={isAdmin} />

      <HeaderActions cartCount={cartCount} />
    </header>
  );
};

export default HeaderApp;
