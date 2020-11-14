import React, { useEffect } from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit()
  })
  return <div className="App">Issues Tracker</div>
}
export default App
