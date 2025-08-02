import "./index.css"
import Navbar from "../../components/navbar/navbar.tsx"
import { Link } from "react-router-dom"
export default function IndexPage() {
    return <>
        <Navbar />
        <div className="index-page">
            <div className="section-one-background">
            </div>
                <div className="section-one-container">
                    <div className="section-one-alert">
                        <p className="section-one-alert-text">We just launched!</p>
                        <Link to="/demo" className="section-one-alert-link">Learn more</Link>
                    </div>
                    <h1 className="section-one-title">Fable has you covered in every way: presentations, notes, and assignments</h1>
                    <p className="section-one-description">We've built the AI solution to meaningless fluff, enhancing your learning and increasing your grades</p>
                    <Link to="/signup" className="section-one-signup-link">Sign Up!</Link>
                </div>

            {/* Steps Section */}
            <div className="steps-section">
                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">01</div>
                        <h3 className="step-title">Upload Your Content</h3>
                        <p className="step-description">Simply upload your lecture notes, research materials, or assignment prompts to get started with AI-powered assistance.</p>
                        <div className="step-image-placeholder">
                            <div className="placeholder-text">Image</div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">02</div>
                        <h3 className="step-title">AI Analysis</h3>
                        <p className="step-description">Our advanced AI processes your content, identifies key concepts, and creates personalized study materials tailored to your needs.</p>
                        <div className="step-image-placeholder">
                            <div className="placeholder-text">Image</div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">03</div>
                        <h3 className="step-title">Enhanced Learning</h3>
                        <p className="step-description">Get instant feedback, generate presentations, and receive personalized recommendations to boost your academic performance.</p>
                        <div className="step-image-placeholder">
                            <div className="placeholder-text">Image</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <div className="cta-container">
                    <h2 className="cta-title">Ready to transform your learning?</h2>
                    <p className="cta-description">Join thousands of students who are already using Fable to enhance their academic performance.</p>
                    <div className="cta-buttons">
                        <Link to="/signup" className="cta-primary">Get Started Free</Link>
                        <Link to="/demo" className="cta-secondary">Watch Demo</Link>
                    </div>
                </div>
            </div>

        </div>

    </>
}