import "./navbar.css"
import {Link} from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="navbar-container">
                <nav className="navbar">
                    <h1 className="navbar-title">Fable</h1>
                    
                    {/* Desktop Navigation */}
                    <ul className="navbar-links desktop-only">
                        <li><Link to="/pricing" className="navbar-link">Pricing</Link></li>
                        <li><Link to="/resources" className="navbar-link">Resources</Link></li>
                        <li><Link to="/demo" className="navbar-link">Demo</Link></li>
                    </ul>
                    <div className="navbar-actions desktop-only">
                        <Link to="/login" className="navbar-action navbar-login">Login</Link>
                        <Link to="/signup" className="navbar-action navbar-signup">Sign Up</Link>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button className="hamburger-button mobile-only" onClick={toggleMenu}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={closeMenu}>
                    <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button className="close-button" onClick={closeMenu}>
                            ×
                        </button>

                        {/* Navigation Links */}
                        <nav className="mobile-nav">
                            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
                            <Link to="/pricing" className="mobile-nav-link" onClick={closeMenu}>Pricing</Link>
                            <Link to="/resources" className="mobile-nav-link" onClick={closeMenu}>Resources</Link>
                            <Link to="/demo" className="mobile-nav-link" onClick={closeMenu}>Demo</Link>
                            
                            {/* Company Section */}
                            <div className="mobile-nav-section">
                                <h3 className="mobile-nav-section-title">Company</h3>
                                <Link to="/careers" className="mobile-nav-link" onClick={closeMenu}>Careers</Link>
                            </div>

                            {/* Actions */}
                            <div className="mobile-nav-actions">
                                <Link to="/login" className="mobile-nav-action mobile-login" onClick={closeMenu}>Login</Link>
                                <Link to="/signup" className="mobile-nav-action mobile-signup" onClick={closeMenu}>Sign Up</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}