import { ShoppingCartIcon, ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { LoginContext } from '../../context/loginContext';
import { useNavigate } from 'react-router';
import { Badge } from "@/components/ui/badge";
import { useCart } from "../../context/cartContext";

const HeaderActions = () => {
  const { isLoggedIn, logout } = useContext(LoginContext);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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

      <button 
        onClick={() => navigate('/cart')} 
        className="flex items-center gap-1 hover:opacity-80"
      >
        <ShoppingCartIcon className="h-6 w-6" />
        <span>
          <Badge variant="secondary" className="text-xs">
            {totalItems}
          </Badge>
        </span>
      </button>
    </div>
  );
};

export default HeaderActions;
