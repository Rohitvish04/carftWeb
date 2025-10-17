// src/components/Layout.jsx
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
