import './Footer.css';
import Subscription from './Subscription';

function Footer() {
    return(
        <footer className="footer">
            <Subscription className="subscription"></Subscription>
            <ul className="footer__items">
                <li className="footer__item"><a href="https://www.facebook.com"><i className="gg-facebook"></i></a></li>
                <li className="footer__item"><a href="https://www.twitter.com"><i className="gg-twitter"></i></a></li>
                <li className="footer__item"><a href="https://www.instagram.com"><i className="gg-instagram"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer;