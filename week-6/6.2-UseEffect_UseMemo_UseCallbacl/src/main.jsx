import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Memo from './memo.jsx'
import Callback from './Callback.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Memo></Memo> */}
    <Callback></Callback>
  </StrictMode>
)
