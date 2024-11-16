import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layouth from "./componentes/layout.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Layouth/>
  </StrictMode>,
)
