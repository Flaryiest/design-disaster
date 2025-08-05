import "./signup.css"
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
        country: 'United States'
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        username: ''
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isIncludedOpen, setIsIncludedOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const countries = [
        'United States',
        'Canada', 
        'United Kingdom',
        'Australia',
        'Germany',
        'France',
        'Japan',
        'Brazil',
        'India',
        'Netherlands',
        'Sweden',
        'Norway',
        'Denmark',
        'Switzerland',
        'Other'
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleCountrySelect = (country: string) => {
        setFormData(prev => ({ ...prev, country }));
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleIncluded = () => {
        setIsIncludedOpen(!isIncludedOpen);
    };

    const validateForm = () => {
        const newErrors = { email: '', password: '', username: '' };
        let isValid = true;

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            isValid = false;
        }

        // Username validation
        if (!formData.username) {
            newErrors.username = 'Username is required';
            isValid = false;
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log('Form submitted:', formData);
        }
    };

    return (
        <>
            <div className="signup-page">
                <div className="signup-container">
                    {/* Left Side - Hero */}
                    <div className="signup-left">
                        <div className="signup-hero">
                            <div className="hero-content">
                                <h1 className="hero-title">Create your free account</h1>
                                <p className="hero-description">
                                    Explore Mythea's core features for individuals and organizations.
                                </p>
                                
                                {/* See what's included section */}
                                <div className="included-section">
                                    <button 
                                        className="included-toggle"
                                        onClick={toggleIncluded}
                                        aria-expanded={isIncludedOpen}
                                    >
                                        <span>See what's included</span>
                                        <svg 
                                            className={`included-arrow ${isIncludedOpen ? 'open' : ''}`}
                                            width="16" 
                                            height="16" 
                                            viewBox="0 0 16 16" 
                                            fill="none"
                                        >
                                            <path 
                                                d="M12 6L8 10L4 6" 
                                                stroke="currentColor" 
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    
                                    {isIncludedOpen && (
                                        <div className={`included-content ${isIncludedOpen ? 'open' : ''}`}>
                                            <div className="included-features">
                                                <div className="feature-item">
                                                    <span className="feature-icon">✓</span>
                                                    <span>Access to core AI learning tools</span>
                                                </div>
                                                <div className="feature-item">
                                                    <span className="feature-icon">✓</span>
                                                    <span>Up to 10 assignments per month</span>
                                                </div>
                                                <div className="feature-item">
                                                    <span className="feature-icon">✓</span>
                                                    <span>Basic progress tracking</span>
                                                </div>
                                                <div className="feature-item">
                                                    <span className="feature-icon">✓</span>
                                                    <span>Community support access</span>
                                                </div>
                                                <div className="feature-item">
                                                    <span className="feature-icon">✓</span>
                                                    <span>Mobile app access</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side - Form */}
                    <div className="signup-right">
                        <div className="signup-redirect">
                            <p className="login-link">
                                Already have an account? <Link to="/login">Sign in →</Link>
                            </p>
                        </div>
                        <div className="signup-form-section">
                            <div className="form-container">
                                <div className="form-header">
                                    <h2 className="form-title">Sign up to Mythea</h2>
                                </div>
                                <form onSubmit={handleSubmit} className="signup-form">
                                    {/* Email Field */}
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">
                                            Email <span className="required">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`form-input ${errors.email ? 'error' : ''}`}
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && <span className="error-message">{errors.email}</span>}
                                    </div>

                                    {/* Password Field */}
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">
                                            Password <span className="required">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className={`form-input ${errors.password ? 'error' : ''}`}
                                            placeholder="Create a password"
                                        />
                                        <p className="password-hint">
                                            Password should be at least 8 characters including a number and a lowercase letter
                                        </p>
                                        {errors.password && <span className="error-message">{errors.password}</span>}
                                    </div>

                                    {/* Username Field */}
                                    <div className="form-group">
                                        <label htmlFor="username" className="form-label">
                                            Username <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            className={`form-input ${errors.username ? 'error' : ''}`}
                                            placeholder="Choose a username"
                                        />
                                        <p className="username-hint">
                                            Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.
                                        </p>
                                        {errors.username && <span className="error-message">{errors.username}</span>}
                                    </div>

                                    {/* Country Field */}
                                    <div className="form-group">
                                        <label htmlFor="country" className="form-label">
                                            Your Country/Region <span className="required">*</span>
                                        </label>
                                        <div className="custom-dropdown" ref={dropdownRef}>
                                            <button
                                                type="button"
                                                className="dropdown-trigger"
                                                onClick={toggleDropdown}
                                                aria-expanded={isDropdownOpen}
                                            >
                                                <span className="dropdown-value">{formData.country}</span>
                                                <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                                                    ▼
                                                </span>
                                            </button>
                                            {isDropdownOpen && (
                                                <div className="dropdown-menu">
                                                    {countries.map((country) => (
                                                        <button
                                                            key={country}
                                                            type="button"
                                                            className={`dropdown-option ${formData.country === country ? 'selected' : ''}`}
                                                            onClick={() => handleCountrySelect(country)}
                                                        >
                                                            {country}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <p className="country-hint">
                                            For compliance reasons, we're required to collect country information to send you occasional updates and announcements.
                                        </p>
                                    </div>

                                    {/* Submit Button */}
                                    <button type="submit" className="submit-button">
                                        Create account →
                                    </button>

                                    {/* Terms */}
                                    <p className="terms-text">
                                        By creating an account, you agree to the{' '}
                                        <a href="#" className="terms-link">Terms of Service</a>. For more
                                        information about Mythea's privacy practices, see the{' '}
                                        <a href="#" className="terms-link">Mythea Privacy Statement</a>.
                                        We'll occasionally send you account-related emails.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}