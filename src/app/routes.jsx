import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Home } from "../pages/home/index.jsx";
import { Portfolio } from "../pages/projects/index.jsx";
import { ContactUs } from "../pages/contact/index.jsx";
import { About } from "../pages/about/index.jsx";
import { Resume } from "../pages/resume/index.jsx";
import { NotFound } from "../pages/notfound/index.jsx";
import { Socialicons } from "../components/socialicons/index.jsx";

function AppRoutes() {
  return (
    <div className="s_c">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Portfolio />} />
        <Route path="/portfolio" element={<Navigate to="/work" replace />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
