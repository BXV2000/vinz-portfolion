import '../css/Navbar.css'
import { ReactComponent as Logo } from '../img/Logo.svg';

const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <a href="./"><Logo className="navbar-logo"/></a>
            <div className="navbar-link-container">
                <a href="./" className="navbar-link">HOME</a>
                <a href="./" className="navbar-link">ABOUT</a>
                <a href="./" className="navbar-link">PORTFOLIO</a>
                <a href="./" className="navbar-link">CONTACT</a>
            </div>
        </div>
     );
}
 
export default Navbar;