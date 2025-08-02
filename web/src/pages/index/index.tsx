import "./index.css"
import Navbar from "../../components/navbar/navbar.tsx"
import { Link } from "react-router-dom"
export default function IndexPage() {
    return <>
        <Navbar />
        <div className="index-page">
            <div className="section-one-container">
                <div className="section-one-alert">
                    <p className="section-one-alert-text">We just launched!</p>
                    <Link to="/demo" className="section-one-alert-link">Learn more</Link>
                </div>

                <h1 className="section-one-title">The future of medical chart review: frictionless, scalable, and trustworthy</h1>
                <p className="section-one-description">We've built the AI layer for chart review - physician-level reasoning that unlocks value and improves care.</p>
                <Link to="/signup" className="section-one-signup-link">Sign Up!</Link>
            </div>

        </div>
    </>
}