import { useState } from 'react';
import './Cart.css';

function Cart({ cart, dispatch, setPage, itemAdded }){
    const [showCart, setShowCart] = useState(false);

    function onClick(){
        setShowCart(!showCart);
    }

    function onCheckout(){
        setShowCart(!showCart);
        setPage('OrderComfirm');
    }

    const list = cart.items.map((item) => (
        <li className="cart__item" key={item.name}>
          <div className="details">
            <h4>{item.name}</h4>  
            <img alt={item.name} src={`./img/${item.name}.jpg`}></img>
            <p className="price__number">${item.price}</p>
         
          <div className="quantity">
            <button 
                className="quantity__button remove" 
                type="button" 
                onClick={()=> dispatch({ type: 'removeItem', payload: item})} 
            >
            -
            </button>
            <p className="quantity__number">{item.quantity}</p>
            <button 
                className="quantity__button add" 
                type="button"
                onClick={()=> dispatch({ type: 'addItem', payload: item })}
            >
            +
            </button>
         </div>
          </div>
        </li>
    ));

    return (
        <div className="cart">
            <button type="button" className="cart__button" onClick={onClick}>
                <i className={`gg-shopping-bag ${itemAdded ? 'added' : ''}`}>
                 {cart.count>0? <span>{cart.count}</span> : "" }   
                 </i>
            </button>
            { showCart && 
                <div className="cart__content">
                    <div className="cart__title">
                        <button type="button" className="closecart" onClick={onClick}>x</button>
                        <h3>Your Cart ({cart.count})</h3>
                    </div>
                    { cart.count > 0 ?
                        <div className="cart__items">{list}</div> 
                        : 
                        <span className="cart__empty">Nothing in the cart.</span>
                    }
                    <div className="total__info">
                        <span className="total__quantity">Quantity: {cart.count} </span>
                        <span className="subtotal">Subtotal: ${cart.total} </span>
                        { cart.count > 0 ?
                            <button type="button" className="checkout__button" onClick={onCheckout} dispatch={dispatch}>Checkout</button>
                            :
                            <button type="button" className="checkout__button" disabled>Checkout</button>
                        }
                    </div>
                </div>
            }
        </div>
    )    
}

export default Cart;