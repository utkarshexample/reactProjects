import { createContext, useContext, useReducer } from "react";

export const TodoItemContext = createContext([]);

const TodoItemsReducer = (currTodoItems, action) => {
  let newTodoItem = currTodoItems;
  console.log(currTodoItems);
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItems,
      { name: action.payload.name, date: action.payload.date },
    ];
    console.log(newTodoItem);
  } else if (action.type === "DELETE_ITEM") {
    let newList = currTodoItems.filter((element) => {
      return element.name !== action.payload.itemName;
    });
    newTodoItem = newList;
  }
  return newTodoItem;
};

const TodoItemsContextProvider = ({ children }) => {
  let [todoItems, dispatchTodoItem] = useReducer(TodoItemsReducer, []);

  const addNewItem = (name, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        name,
        date,
      },
    };
    dispatchTodoItem(newItemAction);
  };
  const deleteNewItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };

  return (
    <TodoItemContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteNewItem: deleteNewItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemsContextProvider;
