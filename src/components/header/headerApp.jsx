import HeaderBar from './headerBar.jsx';
import HeaderMenu from './headerMenu.jsx';
import HeaderActions from './headerActions.jsx';

const HeaderApp = (props) => {
    return (
        <header className="header">
          <HeaderBar />
          <HeaderMenu isAdmin={props.isAdmin} />
          <HeaderActions cartCount={props.cartCount} />
        </header>
        );
}
export default HeaderApp;