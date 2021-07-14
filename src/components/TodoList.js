import React from 'react'

const TodoList = ({todos, updateTodoList, handleDelete}) => {
    return (
        <ul className="todoUL">
           {
              todos.map((t) => (
              <li className="singleTask">
                <span className="todoName" key={t.id}>
                {t.todo}
                </span>

                {/* EDIT BUTTON  */}
                <button onClick={ () =>{updateTodoList(t.id)}
                  
                }>Edit</button>

                {/* DELETE BUTTON */}
                <button className="delBtn" onClick={
                  () => {
                    handleDelete(t.id)
                  }
                }>Delete</button>
              </li>          
              ))
           }
        </ul>
    )
}

export default TodoList
