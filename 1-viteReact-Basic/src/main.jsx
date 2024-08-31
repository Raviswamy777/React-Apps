import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const Element = React.createElement(
//   'a',
//   {href:"https://google.com"},
//   "Click me to take you to GOOGLE"
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
