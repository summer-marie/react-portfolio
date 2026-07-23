import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, useLocation } from 'react-router'
import withRouter from '../hooks/withRouter.jsx'
import AppRoutes from './routes.jsx'
import Headermain from '../header/index.jsx'
import './App.css'

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
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  )
}
