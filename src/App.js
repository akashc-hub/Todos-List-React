import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
function App() {
  const onDelete = (todo) =>{
    console.log("I am on Delete of todo", todo)

  }

  let todos = [
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
  ]
  return (
   <>
    <Header title="My Todo List" searchBar={false}/>
    <Todos todos= {todos} onDelete={onDelete}/>
    <Footer/>
   </>
  );

  }
export default App;
