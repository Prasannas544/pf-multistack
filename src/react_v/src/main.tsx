import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactAPP from './ReactAPP.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReactAPP />
  </React.StrictMode>,
)
