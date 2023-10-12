import { useState } from 'react';
import './HamburgerMenu.css';
import menu from './menu';

function HamburgerMenu({ className, setPage }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function go(event , page){
        event.preventDefault();
        setPage(page);
    }

    const list = menu.map( item => {
        return (
            <li className="hamburger-menu__item">
                <a className="hamburger-menu__link" href={item.path} onClick={(e) => go(e, item.name)} >
                    {item.name}
                </a>
            </li>
        );
    })

    return (
        <div className={`hamburger-menu ${className}`}>
            <button 
                type="button" 
                className="menu__toggle" 
                onClick={toggleMenu}>
                <i className="gg-menu"/>
                Menu
            </button>
            { isOpen && (  
                <ul className="hamburger-menu__list">
                { list }
                </ul> 
            )}
        </div>
    );
}

export default HamburgerMenu;