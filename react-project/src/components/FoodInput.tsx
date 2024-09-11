import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }: any) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item Here"
        onKeyDown={handleKeyDown}
        className={styles.inputClass}
      ></input>
    </>
  );
};

export default FoodInput;
