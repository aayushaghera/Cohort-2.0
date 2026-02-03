import { useState } from "react";

export function CreateTodo(){

    //react query

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");


    return <div>
        
        <input id="title" style={{
            padding : 10,
            margin : 10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value)
        }}></input><br></br>


        <input id="description" style={{
            padding : 10,
            margin : 10
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }}></input><br></br>

        <button style={{
            padding : 10,
            margin : 10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos",
                {
                    method : "POST",
                    body : JSON.stringify({
                        title : title,
                        description : description
                    }),
                    headers : {
                        "content-Type" : "application/json"
                    }

                }
            )
        }}>Add a Todo</button>
    </div>
}