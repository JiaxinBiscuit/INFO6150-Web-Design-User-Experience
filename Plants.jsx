import { useState } from "react";
import './Plants.css';
import PlantsCards from "./PlantsCards";
import { categoryInfo } from "./plantsData";
import { PLANTPAGES } from './constants';

function Plants({ dispatch, cart, setItemAdded }){
    const [page, setPage] = useState('Hard To Kill Plants');
    const [showCards, setShowCards] = useState(true);
    const [selectedPlant, setSelectedPlant] = useState(null);

    function onHardToKillClick() {
        setPage(PLANTPAGES.HARDTOKILL);
        setShowCards(true);
        setSelectedPlant(false);
    }
    
    function onPetFriedndlyClick() {
        setPage(PLANTPAGES.PETFRIENDLY);
        setShowCards(true);
        setSelectedPlant(false);
    }

    function onLowLightClick() {
        setPage(PLANTPAGES.LOWLIGHT);
        setShowCards(true);
        setSelectedPlant(false);
    }

    return(
        <div className="plants">
            <div className="plants-submenu">
                <button onClick={() => onHardToKillClick()}>Hard To Kill Plants</button>
                <button onClick={() => onPetFriedndlyClick()}>Pet Friendly Plants</button>
                <button onClick={() => onLowLightClick()}>Low-Light Tolerant Plants</button>
            </div>
            <div className="plants-title">
                <h1>{page}</h1>
                <span>{categoryInfo[page]}</span>
            </div>
            <PlantsCards 
                page={page} 
                dispatch={dispatch} 
                cart={cart} 
                setItemAdded={setItemAdded} 
                showCards={showCards} 
                setShowCards={setShowCards}
                selectedPlant={selectedPlant}
                setSelectedPlant={setSelectedPlant}
            ></PlantsCards>
        </div>
    );
}

export default Plants;