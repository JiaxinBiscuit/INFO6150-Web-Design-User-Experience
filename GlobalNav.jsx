import menu from './menu';
import'./GlobalNav.css';


function GlobalNav({ className, setPage }) {

    function go(event , page){
        event.preventDefault();
        setPage(page);
    }

    const list = menu.map( item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a className="global-nav__link" href={item.path} onClick={(e) => go(e, item.name)} >
                    {item.name}
                </a>
            </li>
        );
    })

    return (
    <nav className={`global-nav ${className}`}>
        <ul className="global-nav__list">
            { list }
        </ul> 
    </nav>
    );
}

export default GlobalNav;