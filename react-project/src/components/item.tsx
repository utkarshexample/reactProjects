import styles from "./item.module.css";

interface ItemProps {
  listItem: string;
}
const Item = ({ listItem, bought, handleBuyClick }: any) => {
  return (
    <>
      <li className={`list-group-item ${bought ? "active" : ""}`}>
        {listItem}
        <button
          type="button"
          onClick={handleBuyClick}
          className={`btn btn-info ${styles.btn}`}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
