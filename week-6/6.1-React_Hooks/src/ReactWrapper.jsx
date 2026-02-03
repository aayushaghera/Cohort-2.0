//1--->>>> used concept of wrapper component
// we passed a component inside a wrapper component

import { Children, useEffect } from "react"

// ugly syntax of wrapper

// function ReactWrapper() {
//   return <div>
//     <CardWrapper innerComponent={<TextComponent/>}> </CardWrapper>
//     <CardWrapper innerComponent={<TextComponent2/>}> </CardWrapper>
//   </div>
// }

// function TextComponent(){
//    return <div>
//     hi there
//    </div>
// }

// function TextComponent2(){
//   return <div>
//    helo aayush
//   </div>
// }

// function CardWrapper({innerComponent}){
//   return <div style = {{border: "2px solid black",padding : 20}}>
//     {innerComponent}
//   </div>
// }
// export default ReactWrapper


// cleaner syntax of wrapper

function ReactWrapper() {
  return <div>
    <CardWrapper> 
      hello 
    </CardWrapper>

    <CardWrapper> 
      hello there
      <TextComponent />
    </CardWrapper>

    
  </div>
}
 function TextComponent(){
  return <div>
    hi from text component
  </div>
 }

function CardWrapper({children}){
  return <div style = {{border: "2px solid black",padding : 20}}>
    {children}
  </div>
}
export default ReactWrapper