import React, {useState}from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// 50:00 MINS 


const App = () => {

  // THIS IS FOR THE INITIAL TODO (SINGLE TODO)
  const [todo, setTodo] = useState('');

  //THIS STATE IS FOR ALL OF THE TODOS AND WILL BE ARRAY
  const [todos, setTodos] = useState([]);
  
  const [editID, setEditID] = useState(0);

  //THIS IS TO HANDLE SUBMIT
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (editID){
      const editTodo = todos.find((i) => i.id=== editID);
      const updatedTodo = todos.map(
        (t) => t.id === editTodo.id
        ?(t={id:t.id, todo})
        :{id:t.id, todo:t.todo}
      )
      setTodos(updatedTodo);
      setEditID(0);
      setTodo('');
      return

    }



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
        <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editID={editID}/>

        <TodoList todos = {todos}  updateTodoList = {updateTodoList} handleDelete ={handleDelete}/>
        
      </div>
    </div>
  )
}

export default App
