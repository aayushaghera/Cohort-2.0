// re-render is minimize


import React, { useState } from "react"


function Minimize_Rendering() {

  return(
    <div>
      <HeaderButton></HeaderButton>
      <Header title="my name is aayush"></Header>
    </div>
  )
  
}

function HeaderButton()
{
  const [FirstTitle,setFirstTitle] = useState("my name is aayush");
  
  function changeTitle()
  {
    setFirstTitle("my name is " + Math.random())
  }

  return <>
  <button onClick={changeTitle}> click me to change title</button>
  <Header title={FirstTitle}></Header>
  </>
}

function Header({title})
{
  return <div>
    {title}
  </div>
}

export default Minimize_Rendering


