import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate, onDeleteButtonClick }) {
  const { deleteNewItem } = useContext(TodoItemContext);

  return (
    <>
      <div className="row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-4">
          <button
            className="btn btn-danger"
            onClick={() => deleteNewItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
