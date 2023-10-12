import './Checkout.css';
import { useState } from 'react';

function Checkout({ cart, setPage, dispatch }){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [sameAsShipping, setSameAsShipping] = useState(true);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleShippingAddressChange = (event) => {
        setShippingAddress(event.target.value);
        if (sameAsShipping) {
          setBillingAddress(event.target.value);
        }
    };
    
    const handleBillingAddressChange = (event) => {
        setBillingAddress(event.target.value);
    };
    
    const handleSameAsShippingChange = (event) => {
        setSameAsShipping(event.target.checked);
        if (event.target.checked) {
          setBillingAddress(shippingAddress);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage('OrderComplete');
        dispatch({ type: 'clearCart', payload: cart});
    }
    
    return (
        <form className="checkout__info" onSubmit={handleSubmit}>
            <h1>Shipping & Payment</h1>
            <div className="checkout__name">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />
            </div>
            <div className="checkout__email">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="checkout__card">
                <label htmlFor="checkout__card">Card Number: </label>
                <input type="text" id="checkout__card" value={email} onChange={handleEmailChange} />
            </div>         
            <div className="checkout__shopping">
                <label htmlFor="address">Shipping Address: </label>
                <input type="text" id="address" value={shippingAddress} onChange={handleShippingAddressChange} />
            </div>
            <div className="checkout__billing">
                <label htmlFor="billing__address">Billing Address: </label>
                <input
                    type="text"
                    id="billing__address"
                    value={billingAddress}
                    onChange={handleBillingAddressChange}
                    readOnly={sameAsShipping}
                />
                <div className="checkbox">
                <input
                    className="checkbox"
                    id="shipping__address"
                    type="checkbox"
                    checked={sameAsShipping}
                    onChange={handleSameAsShippingChange}
                />
                <label htmlFor="shipping__address">Same as shipping address</label>
                </div>
            </div>
            <button type="button" className="pay__button" onClick={handleSubmit}>Comfirm</button>
        </form> 
    )  
}

export default Checkout;