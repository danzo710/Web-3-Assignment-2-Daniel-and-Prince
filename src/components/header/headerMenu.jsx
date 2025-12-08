import { Link } from 'react-router';
import { useContext } from 'react';
import { LoginContext } from '../../context/loginContext'; 
const HeaderMenu = function (props) {
    const { isLoggedIn } = useContext(LoginContext);

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product/men">Men</Link></li>
                <li><Link to="/product/women">Women</Link></li>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/about">About</Link></li>
                {isLoggedIn && <li><Link to="/dashboard/sales">Sales Dashboard</Link></li>}
            </ul>
        </nav>
    );
}

export default HeaderMenu;