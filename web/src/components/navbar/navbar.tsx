import "./navbar.css"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
            <h1 className="navbar-title">Fable</h1>
            <ul className="navbar-links">
                <li><Link to="/" className="navbar-link">Home</Link></li>
                <li><Link to="/about" className="navbar-link">About</Link></li>
                <li><Link to="/contact" className="navbar-link">Contact</Link></li>
                <li><Link to="/demo" className="navbar-link">Demo</Link></li>
            </ul>
            <div className="navbar-actions">
                <Link to="/login" className="navbar-action navbar-login">Login</Link>
                <Link to="/signup" className="navbar-action navbar-signup">Sign Up</Link>
            </div>
            </nav>
        </div>
    );
}