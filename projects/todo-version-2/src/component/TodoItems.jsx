import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemContext);
  return (
    <div>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.date}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
