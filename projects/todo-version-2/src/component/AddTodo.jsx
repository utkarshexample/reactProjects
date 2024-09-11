import { useContext, useRef } from "react";
import { TodoItemContext } from "../store/todo-items-store";

function AddTodo() {
  const contextObj = useContext(TodoItemContext);
  const addNewItem = contextObj.addNewItem;
  const todoName = useRef("");
  const todoDate = useRef("");

  const handleAddlocal = () => {
    addNewItem(todoName.current.value, todoDate.current.value);
    todoName.current.value = "";
    todoDate.current.value = "";
  };
  return (
    <>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo Item"
            ref={todoName}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={todoDate}></input>
        </div>
        <div className="col-4">
          <button className="btn btn-success" onClick={handleAddlocal}>
            ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
