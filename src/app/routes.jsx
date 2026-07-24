import React from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { Home } from "../pages/home/index.jsx";
import { WorkPage } from "../pages/projects/index.jsx";
import { ContactUs } from "../pages/contact/index.jsx";
import { About } from "../pages/about/index.jsx";
import { Resume } from "../pages/resume/index.jsx";
import { NotFound } from "../pages/notfound/index.jsx";
import { PageTransition } from "../components/pagetransition/index.jsx";

function AppRoutes() {
  const location = useLocation();

  return (
    <div className="s_c">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/work"
            element={
              <PageTransition>
                <WorkPage />
              </PageTransition>
            }
          />
          <Route path="/portfolio" element={<Navigate to="/work" replace />} />
          <Route
            path="/resume"
            element={
              <PageTransition>
                <Resume />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactUs />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AppRoutes;
