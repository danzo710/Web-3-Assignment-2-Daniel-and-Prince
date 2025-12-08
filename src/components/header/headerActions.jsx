import { ShoppingCartIcon, ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { LoginContext } from '../../context/loginContext';
import { useNavigate } from 'react-router';
import { Badge } from "@/components/ui/badge";

const HeaderActions = (props) => {
  const { isLoggedIn, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex items-center gap-4">
      {isLoggedIn ? (
        <button 
          onClick={handleLogout} 
          className="flex items-center gap-1 hover:opacity-80"
        >
          <ArrowLeftEndOnRectangleIcon className="h-6 w-6" /> Log Out
        </button>
      ) : (
        <button 
          onClick={() => navigate('/login')} 
          className="flex items-center gap-1 hover:opacity-80"
        >
          <ArrowLeftStartOnRectangleIcon className="h-6 w-6" /> Login
        </button>
      )}
      {/* Shopping Cart */}
  <button 
    onClick={() => navigate('/cart')} 
    className="flex items-center gap-1 hover:opacity-80"
  >
    <ShoppingCartIcon className="h-6 w-6" />
    <Badge variant="secondary" className="text-xs">
      {props.cartCount || 0}
    </Badge>
  </button>

    </div>
  );
};

export default HeaderActions;
