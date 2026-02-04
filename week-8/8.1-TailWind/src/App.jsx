import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevanueCard } from './components/RevenueCard'

function App() {


  return (
    <div className='grid grid-cols-4'>
     <RevanueCard
        title={"amount panding"}
        amount={"92,312.20"}
        orderCount={13}
     ></RevanueCard>
    </div>
  )
}

export default App
