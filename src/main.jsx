import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  HashRouter } from 'react-router-dom'
import MyContext from '../contax/MyContext.jsx'
 

createRoot(document.getElementById('root')).render(
   <StrictMode>
     <HashRouter>  
    <MyContext>
    <App /> 
    </MyContext>
    </HashRouter>  
    
  </StrictMode>,
)
