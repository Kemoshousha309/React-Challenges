import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const Refs = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Refs.Provider value={{}}>
    <App />
  </Refs.Provider>
  </React.StrictMode>,
)
