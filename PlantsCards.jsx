import { plantsData } from "./plantsData";
import { useState } from "react";
import PlantDetail from "./PlantDetail";

function PlantsCards({ page, dispatch, cart, setItemAdded, showCards, setShowCards, selectedPlant, setSelectedPlant}) {
  const [showButton, setShowButton] = useState(false);
  const filteredData = plantsData.filter((plant) => plant.category === page);

  function onMouseEnter(){
    setShowButton(true);
  }

  function onMouseLeave(e){
    const isStillOverButton = e.relatedTarget?.classList?.contains('card__button');
    if(!isStillOverButton){
      setShowButton(false);
    } 
  }

  function onButtonClick(plant) {
    setSelectedPlant(plant);
    setShowCards(false);
  }

  function onBackClick() {
    setSelectedPlant(null);
    setShowCards(true);
  }
  
  return (
    <div>
    {showCards && (
      <div className="plants-cards" >
      {filteredData.map((plant) => (
        <div className="card" key={plant.name}>
          <img
            className="card__pic"
            alt={plant.name}
            src={`./img/${plant.name}.jpg`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          /> 
          {showButton && (
            <button 
              className={`card__button ${plant.name}`} 
              onClick={() => onButtonClick(plant.name)}>
              View Details
            </button>
          )}
          <h2 className="card__title">{plant.name}</h2>
          <p className="card__text">
            Price: ${plant.price}
          </p>
        </div>
      ))}
    </div>
  )}
  
  {selectedPlant && 
    <div className="plant-detail">
      <button className="back-button" onClick={onBackClick}>x</button>
      <PlantDetail selectedPlant={selectedPlant} dispatch={dispatch} cart={cart} setItemAdded={setItemAdded}></PlantDetail>
    </div>
  }

  </div>
  )
}

export default PlantsCards;