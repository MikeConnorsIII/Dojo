import React, {useState} from 'react'

const ToDoList = () => {
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([])
  
    const handleNewTodoSubmit = (event) => {
      event.preventDefault()
      // setTodos and pass in a brand new array containing all arrays plus one more
      setTodos([...todos, newTodo])
      console.log(todos)
      setNewTodo("")
    }
  
    const handleNewTodoDelete = (delIdx) => {
      const filteredTodos = todos.filter((todo, i) => {
        return i !== delIdx
      })
      setTodos(filteredTodos)
    }
  
    return (
      <div style={{textAlign: "center"}}>
        
        <form onSubmit={(event) => {
          handleNewTodoSubmit(event)
        }}>
          <input onChange={(event) =>{
            setNewTodo(event.target.value)
          }}
           type="text"
           value={newTodo}
            ></input>
          <div>
            <button>
              Add
            </button>
          </div>
        </form>
          
        {todos.map((todo, i) => {
            return (
            <div key={i}>
              <span>{todo}</span>
              <button onClick={(event) => {
                handleNewTodoDelete(i)
              }}>Delete</button>
          </div>
          );
          })}
          </div>
    )
  }

export default ToDoList