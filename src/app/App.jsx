import React, { useEffect } from 'react'
import { BrowserRouter as Router, useLocation } from 'react-router'
import withRouter from '../hooks/withRouter.jsx'
import AppRoutes from './routes.jsx'
import { Navbar } from '../components/navbar/index.jsx'
import { Footer } from '../components/footer/index.jsx'

function ScrollToTopBase(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(ScrollToTopBase)

export default function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop>
        <Navbar />
        <main id="main">
          <AppRoutes />
        </main>
        <Footer />
      </ScrollToTop>
    </Router>
  )
}
