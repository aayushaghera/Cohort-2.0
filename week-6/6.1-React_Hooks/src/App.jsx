import React, { useState } from "react"
//import { Fragment } from "react"

function App() {

  const[title,setTitle] = useState("my name is aayush");


  // What is <React.Fragment>?
  // <React.Fragment> is a special component in React that lets you group multiple elements together without adding extra tags (like <div>) in the final HTML.

  //se <React.Fragment> (or <> </>) when you need to group multiple elements but don’t want to add extra tags like <div> to your HTML.

  // return (
  //   <Fragment>
  //   <Header title="aayush1"></Header>
  //   <Header title="aayush2"></Header>
  //   </Fragment>
  // )

  function updateTitle(){
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
    <button onClick={updateTitle}>update the title</button> 
    <Header title={title}></Header> 
    <Header title="aayush1"></Header>
    <Header title="aayush2"></Header>
    </div>

    //how do not write multiple siblings in without <div>
    //we write multiple siblings without <div> so what issue
    //is occur??
    //so we do not use <div> so we use <Fragment> so we donot
    //style <div> ... 


    // Imagine React as a tree-building tool. Each component is like a branch or a leaf in the tree.

    // For React to build and understand this tree, every branch needs to connect to one main root.

    // If a component doesn’t have a single parent (root), React doesn’t know how to attach its parts (the siblings) to the tree.

    //It sees two separate branches (<Header title="aayush1" /> and <Header title="aayush2" />) with no single point to attach them to the tree.

    //Without a single parent, React doesn’t know how to group multiple elements.

    // Think of it like a shopping cart. You can’t just toss items randomly; you need a basket (parent) to hold them together. Without the basket, the items are scattered, and the system doesn’t know how to process them.

    //In Summary:

// React needs a single parent element to group multiple elements and connect them to the Virtual DOM tree.
// Without a parent, React gets confused because it doesn’t know how to organize and manage the elements.
// Using a parent (like <div> or <React.Fragment>) solves this problem.

  )
}

// memo lets you skip re-rendering a component when its
// props are unchanged sp that is done by React.memo
   
const Header = React.memo(function Header({title})
{
  return <div>
    {title}
  </div>
})

// function Header({title})
// {
//   return <div>
//     {title}
//   </div>
// }

export default App


// any time title re=render so parent App is re-render 
// and any time parent re-render so that child is also
// re-render bcz of this re-rendering is not mimimize so 
// how re-rendering minimize??-->go to next folder....