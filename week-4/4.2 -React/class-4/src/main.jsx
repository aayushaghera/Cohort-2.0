import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// remove difference clculating framework base on
// current state something shoud get removed from
// native app,website


//it is actually tell react ha k you are currently
//context of a website please you know remove things of a dom 
// add thingss of a dom bcz you are in website right now
//