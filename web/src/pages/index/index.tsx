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
                <h1 className="section-one-title">Fable has you covered in every way: presentations, notes, and assignments</h1>
                <p className="section-one-description">We've built the AI solution to meaningless fluff, enhancing your learning and increasing your grades</p>
                <Link to="/signup" className="section-one-signup-link">Sign Up!</Link>
            </div>
        </div>
    </>
}