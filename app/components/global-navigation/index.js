"use strict"

import React from "react"
import { Link } from "react-router-dom"
// require("./global-navigation.css")

const GlobalNav = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link to="/topics">Topics</Link>
      </div>
    </div>
  )
}

export default GlobalNav
