import { useState, useEffect, useReducer } from 'react';

import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Status from './Status';

import { initialState, reducer } from './cartReducer';
import { LOGIN_STATUS, SERVER, CLIENT } from './constants';
import { fetchLogin, fetchSession, fetchLogout, fetchUpdateCart, fetchCart } from './services';

function App() {
  const [page, setPage] = useState('Home');
  const [loginStatus, setLoginStatus] = useState(LOGIN_STATUS.PENDING);
  const [username, setUsername] = useState('');
  const [cart, dispatch] = useReducer(reducer, initialState);
  const [itemAdded, setItemAdded] = useState(false);
  const [error, setError] = useState('');

  function onLogin(username){
    fetchLogin(username)
    .then(cart => {
      setUsername(username);
      dispatch({ type: 'setCart', payload: cart });
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      setError('');
    })
    .catch(err =>{
      setError(err?.error || '');
    });
  }

  function onLogout(){
    setUsername('');
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    setError('');
    fetchLogout()
    .then(() => {
      dispatch({ type: 'clearCart', payload: cart });
      setPage('Home');
    })
    .catch(err =>{
      setError(err?.error || '');
    });
  }

  function checkForSession(){
    fetchSession()
    .then( username => {
      setUsername(username);
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      return fetchCart();
    })
    .catch( err => {
      if( err?.error === SERVER.AUTH_MISSING ) {
        return Promise.reject({ error: CLIENT.NO_SESSION })
      }
      return Promise.reject(err); 
    })
    .then( cart =>{
      dispatch({ type: 'setCart', payload: cart });
    })
    .catch( err => {
      if( err?.error === CLIENT.NO_SESSION ) {
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        return;
      }
      setError(err?.error || ''); 
    });
  }

  useEffect(
    () => {
      checkForSession();
    },
    [username]
  );

  useEffect(
    () => {
      fetchUpdateCart(cart);
    },
    [cart]
  );

  return (
    <div className="app">
      <Header 
        setPage={setPage} 
        onLogin={onLogin} 
        onLogout={onLogout} 
        loginStatus={loginStatus} 
        username={username} 
        error={error}
        cart={cart}
        dispatch={dispatch} 
        setError={setError}
        itemAdded={itemAdded}
      />
      <a className="skip-to-content-link" href="#main">Skip to main content</a>
      { error !== SERVER.AUTH_INSUFFICIENT && error !== SERVER.REQUIRED_USERNAME ?
        <Status className={`app__error`} error={error}/> 
      :
        ''
      }
      <Main 
        page={page} 
        setPage={setPage} 
        dispatch={dispatch} 
        cart={cart} 
        setItemAdded={setItemAdded}
        error={error}
        setError={setError}
      />
     
      <Footer/>
    </div>
  );
}

export default App;