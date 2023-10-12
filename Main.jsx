import './Main.css';
import Plants from './Plants';
import Home from './Home';
import OrderComplete from './OrderComplete';
import OrderComfirm from './OrderConfirm';
import Checkout from './Checkout';
import AIDoctor from './AIDoctor';


function Main({ page, setPage, dispatch, cart, setItemAdded }) {
    return (
        <main className="main" id="main">
        { (page === 'Home') && <Home setPage={setPage}/> }
        { (page === 'Plants') && <Plants dispatch={dispatch} cart={cart} setItemAdded={setItemAdded}/> }
        { (page === 'OrderComfirm') && <OrderComfirm cart={cart} setPage={setPage} dispatch={dispatch}/> }
        { (page === 'Checkout') && <Checkout cart={cart} setPage={setPage} dispatch={dispatch}/> }
        { (page === 'OrderComplete') && <OrderComplete setPage={setPage}/> }
        { (page === 'AI Plant Doctor') && <AIDoctor/> }
        </main>
    );
}

export default Main;