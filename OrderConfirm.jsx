import './OrderConfirm.css';

function OrderConfirm({ cart, setPage, dispatch }){
    const handleSubmit = (e) => {
        e.preventDefault();
        setPage('Checkout');
        dispatch({ type: 'clearCart', payload: cart});
    }

    const list = cart.items.map((item) => (
        <li className="order__item" key={item.name}>
            <h3>{item.name}</h3>  
            <img alt={item.name} src={`./img/${item.name}.jpg`}></img>
            <p className="order__price">Price: ${item.price}</p>
            <p className="order__quantity">Quantity: {item.quantity}</p>
            <p className="order__subtotal">Subtotal: ${item.price * item.quantity}</p>
        </li>
    ));

    return (
        <div className="order__summary">
            <h1>Order Summary</h1>
            <h2>Item</h2>
            <div className="order__items">
            {list} 
            </div>
            <div className="order__confirm">
                <p className="total__price">Total: ${cart.total}</p>
                <button type="button" className="comfirm__button" onClick={handleSubmit}>Continue To Checkout</button>
            </div>
        </div>
    )  
}

export default OrderConfirm;