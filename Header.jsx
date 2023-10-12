import './Header.css'
import GlobalNav from './GlobalNav';
import HamburgerMenu from './HamburgerMenu';
import Cart from './Cart';
import Logout from './Logout';
import LoginModal from './LoginModal';
import { LOGIN_STATUS } from './constants';

function Header({ setPage, onLogout, onLogin, loginStatus, username, cart, dispatch, error, setError, itemAdded }) {
    function go(event , page){
        event.preventDefault();
        setPage(page);
    }

    return (
        <header className="header">
            <a href="#home" onClick={(e) => go(e, "Home")}><h1 className="brand__name">Leafy Living</h1></a>
            <div className="users">
                { loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <LoginModal onLogin={onLogin} error={error} setError={setError}/> }
                { loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
                    <div className="logout">
                        <p>Hello, {username}</p>
                        <Logout onLogout={onLogout}>Logout</Logout>
                    </div>
                )}
            <Cart cart={cart} dispatch={dispatch} setPage={setPage} itemAdded={itemAdded}/>
            </div>
            <div className="nav">
                <GlobalNav className="header__nav" setPage={setPage}/>
                <HamburgerMenu className="hamburger-menu__nav" setPage={setPage}/>
            </div>  
        </header>
    );
}

export default Header;