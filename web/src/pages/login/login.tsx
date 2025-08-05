import styles from "./login.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: ''
    });

    const [errors, setErrors] = useState({
        email: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = { email: '' };
        let isValid = true;

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
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

    const handleGoogleLogin = () => {
        // Handle Google login
        console.log('Google login clicked');
    };

    const handleMicrosoftLogin = () => {
        // Handle Microsoft login
        console.log('Microsoft login clicked');
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h1 className={styles.loginTitle}>Sign in to Mythea</h1>
                
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                            placeholder="Your email address"
                        />
                        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                    </div>

                    <button type="submit" className={styles.continueButton}>
                        Continue
                    </button>
                </form>

                <div className={styles.divider}>OR</div>

                <div className={styles.socialButtons}>
                    <button 
                        type="button" 
                        className={styles.socialButton}
                        onClick={handleGoogleLogin}
                    >
                        <div className={`${styles.socialIcon} ${styles.googleIcon}`}></div>
                        Continue with Google
                    </button>
                    
                    <button 
                        type="button" 
                        className={styles.socialButton}
                        onClick={handleMicrosoftLogin}
                    >
                        <div className={`${styles.socialIcon} ${styles.microsoftIcon}`}></div>
                        Continue with Microsoft
                    </button>
                </div>

                <p className={styles.signupLink}>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}