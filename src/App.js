import React, {useState}from 'react'
import './App.css'

const App = () => {

  // THIS IS FOR THE INITIAL TODO (SINGLE TODO)
  const [todo, setTodo] = useState('');

  //THIS STATE IS FOR ALL OF THE TODOS AND WILL BE ARRAY
  const [todos, setTodos] = useState([]);
  
  const [editID, setEditID] = useState(0);

  //THIS IS TO HANDLE SUBMIT
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (todo !== ''){
      setTodos(
        [
          {
            id: `${todo}-${Date.now()}`,
            todo
          },
          ...todos
        ]
      )
      setTodo('')
    }
  }

  // THIS IS TO DELETE TODO FROM LIST
  const handleDelete = (valueIDFromDeleteElement) => {
    const delTodo = todos.filter((x) => {
      return (x.id !== valueIDFromDeleteElement);
    } )
    setTodos([...delTodo])
    
  }

  const updateTodoList = (xx) =>{
    const editTodo = todos.find((i)=> i.id === xx);   
    setTodo(editTodo.todo);
    setEditID(xx);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Project Todo List</h1>
        <form className='todoForm' onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={todo}
            onChange={
            (e)=>{
              (setTodo(e.target.value))
            }
            }/>
          <button type='submit'> {editID ? "Edit" : 'Submit'}</button>
        </form>

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
        
      </div>
    </div>
  )
}

export default App
