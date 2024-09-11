import Hello from "./components/Hello";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([
    "Chicken",
    "Rice",
    "Paneer",
    "Protien",
  ]);

  const onKeyDown = (event: any) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newFoodArry = [...foodItems, newFoodItem];
      setFoodItems(newFoodArry);
      event.target.value = "";
    }
  };
  return (
    <>
      <Container>
        <Hello></Hello>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
