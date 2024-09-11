import { useState } from "react";
import Item from "./item";

const FoodItems = (props: any) => {
  let [activeItems, setActiveItems] = useState([]);
  const onBuyButton = (item: any, event: any) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  const boughtItemCheck = (item: any) => {
    return activeItems.includes(item);
  };
  return (
    <>
      <div className="list-group">
        {props.items.map((item: any) => (
          <Item
            key={item}
            listItem={item}
            bought={boughtItemCheck(item)}
            handleBuyClick={(event: any) => onBuyButton(item, event)}
          ></Item>
        ))}
      </div>
    </>
  );
};
export default FoodItems;
