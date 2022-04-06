import '../css/Navbar.css';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../img/Logo.svg';

const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <Link to="./"><Logo className="navbar-logo"/></Link>
            <div className="navbar-link-container">
                <Link to="/" className="navbar-link">HOME</Link>
                <Link to="/About" className="navbar-link">ABOUT</Link>
                <Link to="/Portfolio" className="navbar-link">PORTFOLIO</Link>
                <Link to="/Contact" className="navbar-link">CONTACT</Link>
            </div>
        </div>
     );
}
 
export default Navbar;