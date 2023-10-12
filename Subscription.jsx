import {  useState } from 'react';
import "./Subscription.css";

function Subscription(){
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function onSubmit(e){
        e.preventDefault();

        if(!email){
            setMessage("This field must be filled in.");
        }else if(!isValidEmail(email)){
            setMessage("Please enter a valid email.");
        }else{
            setMessage("You're in the list!");
        }
    }

    function onChange(e){
        setEmail(e.target.value);
    }

    return(
        <div className="subscription">
            <h3 >Subscrib to receive 10% off your first order!</h3>
            <form className="subscription__form" action="#/subscription" onSubmit={onSubmit}>
                <label htmlFor="subscription__email">
                    <input type="text" id="subscription__email" className="subscription__email" placeholder="Enter your email here..." onChange={onChange}></input>
                </label>
                <button className="subscription__button" type="submit">Subscribe</button>
                <span className="subscription__message">{message}</span>
            </form>
        </div>
    );
}

export default Subscription;