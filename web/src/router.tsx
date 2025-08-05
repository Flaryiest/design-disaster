import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/index/index.tsx";
import DemoPage from "./pages/demo/demo.tsx";
import PricingPage from "./pages/pricing/pricing.tsx";
import LoginPage from "./pages/login/login.tsx";
import SignUpPage from "./pages/signup/signup.tsx";
import ResearchAssistantPage from "./pages/features/researchAssistant/researchAssistant.tsx";
import SlideshowCreatorPage from "./pages/features/slideshowCreator/slideshowCreator.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/feature">
        <Route path="research" element={<ResearchAssistantPage />} />
        <Route path="slideshow" element={<SlideshowCreatorPage />} />
      </Route>
    </>
  )
);

export default router;
