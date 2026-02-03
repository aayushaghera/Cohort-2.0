//useEffect

import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const[exchangeData,setExchangeData] = useState({});
  const[bankData,setBankData] = useState({});
  console.log("hi there re-render");

  useEffect(function(){
    setTimeout(function(){
      setBankData({income : 100});
    },3000);
  },[])// [bankData,exchangeData]

  useEffect(function(){
    setTimeout(function(){
      setExchangeData({return : 100});
    },1000);
  },[])


  //infiniteloop 
  // setTimeout(() => {
  //   setBankData({ income: 100 });
  // }, 3000);

  // setTimeout(() => {
  //   setExchangeData({ return: 100 });
  // }, 1000);

  const incomeTax = (bankData.income + exchangeData.return) * 0.3;


  return (
    <>
      hi there, your income tax returns are {incomeTax}
      
    </>
  )
}

export default App
