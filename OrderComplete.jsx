import './OrderComplete.css';

function OrderComplete({ setPage }){
    return(
        <div className="orderComplete">
            <h1>Thank You for Your Order!</h1>
	        <p>Your order has been received and is being processed. We'll send you an email confirmation shortly with your order details.</p>
            <button type="button" className="shopping__button" onClick={()=> setPage('Plants')}>Continue Shopping</button>
        </div>
    )
}

export default OrderComplete;