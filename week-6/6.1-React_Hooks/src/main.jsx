import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Minimize_Rendering from './MinimizeRendering.jsx'
import ReactWrapper from './ReactWrapper.jsx'
import ReactKey from './ReactKey.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <App /> */}
        {/*  <Minimize_Rendering></Minimize_Rendering> */}
        {/* <ReactWrapper></ReactWrapper> */}
        <ReactKey></ReactKey>
    </StrictMode>
    
)
