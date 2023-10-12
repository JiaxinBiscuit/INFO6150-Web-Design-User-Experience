import { plantsData } from "./plantsData";
import './PlantDetail.css';

function PlantDetail({selectedPlant, dispatch, setItemAdded}){
    const plant = plantsData.find((product) => product.name === selectedPlant);

    function onButtonClick() {
        dispatch({ type: 'addItem', payload: plant })
        setItemAdded(true);
        setTimeout(() => {
            setItemAdded(false);
        }, 500);
    }

    return(
        <div className="product-detail">
            <div className="product-image">
                <img className="plant-image" src={`./img/${selectedPlant}.jpg`} alt={selectedPlant} />
            </div>
            <div className="product-text">
                <h2>{selectedPlant}</h2>
                <div className="product-price">${plant.price}</div>
                <p className="product-description">{plant.description}</p>
                <p className="product-shipment">Ready for Shipment in 1 to 3 business days.</p>
                <button className="addtocart__button" onClick={()=> onButtonClick()}>Add to Cart</button>
            </div>
      </div>
    );
}

export default PlantDetail;

