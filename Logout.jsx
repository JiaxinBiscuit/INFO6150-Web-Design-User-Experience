import './Logout.css';

function Logout({ onLogout }){
    return (
        <button className="logout__button" type="submit" onClick={onLogout}>Logout</button>  
    );
}

export default Logout;