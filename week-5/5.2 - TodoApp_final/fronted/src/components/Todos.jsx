// with object destructuring

// todos = {
//     title : "hi"
//     description : "hello"
// }

export function Todos({todos})
{
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed === true ? "completed" : "mark as completed"}</button>
                </div>
        })}
    </div>
}



// // without object destructuring

// export function Todos(props)
// {
//     const todos = props.todos
// }




// export function Todos({todos})
// {
//     return <div>
//         <h1>go to gym</h1>
//         <h2>you need go to gym</h2>
//         <button>Mark as completed</button>
//     </div>
// }


