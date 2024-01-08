import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo'
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) =>{
    console.log("I am on Delete of todo", todo);
    // Deleting this way is not works in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState( [
    {
      sno : 1,
      title : "Go to the Market",
      desc : "You need to go and Complete the Job1"
    },
    {
      sno : 2,
      title : "Go to the Mall",
      desc : "You need to go and Complete the Job2"
    },
    {
    sno : 3,
      title : "Go to the Shopping",
      desc : "You need to go and Complete the Job3"
    }
  ]);

  return (
   <>
    <Header title="My Todo List" searchBar={false}/>
    <AddTodo/>
    <Todos todos= {todos} onDelete={onDelete}/>
    <Footer/>
    
   </>
  );

  }
export default App;
