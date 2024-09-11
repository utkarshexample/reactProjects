import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import TodoItem from "./component/TodoItem";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItem></TodoItem>
      <TodoItem2></TodoItem2>
    </center>
  );
}

export default App;
