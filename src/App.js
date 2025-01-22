import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import HeroS2 from "./HeroS2";
import HeroS3 from "./HeroS3";
import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";
import HeroS4 from "./HeroS4";
import HeroS5 from "./HeroS5";
import HeroS6 from "./HeroS6";
const App = () => {
  return (
    <Router>
      <ConditionalLayout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <HeroS2 />
                <HeroS3 />
                <HeroS4 />
                <HeroS5 />
                <HeroS6 />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ConditionalLayout>
    </Router>
  );
};

// Component for conditionally rendering the layout
const ConditionalLayout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"]; // Define routes where Navbar should not be displayed
  const isNavbarVisible = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {isNavbarVisible && <Navbar />}
      <div>{children}</div>
    </>
  );
};

export default App;
