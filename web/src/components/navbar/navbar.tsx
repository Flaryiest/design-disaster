import "./navbar.css"
import {Link} from "react-router-dom"
import { useState, useEffect, useRef } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const featuresRef = useRef<HTMLLIElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleFeatures = () => {
        setIsFeaturesOpen(!isFeaturesOpen);
    };

    const closeFeaturesDropdown = () => {
        setIsFeaturesOpen(false);
    };

    // Close features dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
                setIsFeaturesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="navbar-container">
                <nav className="navbar">
                    <h1 className="navbar-title"><Link to="/">Fable</Link></h1>

                    {/* Desktop Navigation */}
                    <ul className="navbar-links desktop-only">
                        <li><Link to="/pricing" className="navbar-link">Pricing</Link></li>
                        <li className="navbar-dropdown" ref={featuresRef}>
                            <button 
                                className="navbar-link features-trigger" 
                                onClick={toggleFeatures}
                                onBlur={() => setTimeout(closeFeaturesDropdown, 150)}
                            >
                                Features 
                                <span className={`dropdown-arrow ${isFeaturesOpen ? 'open' : ''}`}>▼</span>
                            </button>
                            {isFeaturesOpen && (
                                <div className="features-dropdown">
                                    <Link to="/features/research-assistant" className="dropdown-item" onClick={closeFeaturesDropdown}>
                                        Research Assistant
                                    </Link>
                                    <Link to="/features/slideshow-creator" className="dropdown-item" onClick={closeFeaturesDropdown}>
                                        Slideshow Creator
                                    </Link>
                                </div>
                            )}
                        </li>
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
                            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Fable</Link>
                            <Link to="/pricing" className="mobile-nav-link" onClick={closeMenu}>Pricing</Link>
                            
                            {/* Features Section */}
                            <div className="mobile-nav-section">
                                <h3 className="mobile-nav-section-title">Features</h3>
                                <Link to="/features/research-assistant" className="mobile-nav-link" onClick={closeMenu}>Research Assistant</Link>
                                <Link to="/features/slideshow-creator" className="mobile-nav-link" onClick={closeMenu}>Slideshow Creator</Link>
                            </div>
                            
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