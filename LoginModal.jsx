import { useState } from 'react';
import './LoginModal.css';
import Status from './Status';

function LoginModal({onLogin, error, setError}) {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');

  function onSubmit(e){
    e.preventDefault();
    if(username){
      onLogin(username);
    }else{
      setError('required-username');
    }
  }

  function onChange(e){
    setUsername(e.target.value);
    setError('');
  }

  return (
    <>
    <button className="login__button" onClick={() => setShowModal(true)}>Sign In</button>
    {showModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(false)}>&times;</span>
          <h2>Log Into Your Account</h2>
          <form className="login__form" action="#/login" onSubmit={onSubmit}>
            <label className="login__label" >
                <span>Username: </span>
                <input className="login__username" value={username} onChange={onChange}></input>
            </label>
            { error && <Status className={`login__error`} error={error}/> }
            <button className="submit__button" type="submit">Login</button>
          </form>
        </div>
      </div>
    )}
    </>
  );
}

export default LoginModal;