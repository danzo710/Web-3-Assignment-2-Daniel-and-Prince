import { ShoppingCartIcon, ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { LoginContext } from '../../context/loginContext';
import { useNavigate } from 'react-router';
const HeaderActions = (props) => {
    const { isLoggedIn, logout } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
    <div>
        {isLoggedIn ? (
        <>
          <button onClick={() => handleLogout}><ArrowLeftEndOnRectangleIcon className="h-6 w-6" /> Log Out</button>
          <button onClick={() => navigate('/cart')}> <ShoppingCartIcon className="h-6 w-6" /><span>{props.cartCount}</span></button>
        </>
      ) : (
        <button onClick={() => navigate('/login')}><ArrowLeftStartOnRectangleIcon className="h-6 w-6" />Login</button>
      )}
    </div>
  );
};

export default HeaderActions;
