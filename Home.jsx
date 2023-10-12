import './Home.css';

function Home({ setPage }){
    function onClick(){
        setPage('Plants');
    }

    return(
        <div className="home">     
            <div className="hero__grid">
                <img className="home__img" alt="a living home with serveral plants" src="../img/home.jpg"></img>
                <div className="home__text">
                    <h2 className="home__title"> Bring home some lush greenery</h2>
                    <button className="home__button" onClick={onClick}>Shop Plants</button>
                </div>
            </div>
        </div>
    );
}

export default Home;