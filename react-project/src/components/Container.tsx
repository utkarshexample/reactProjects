import styles from "./Container.module.css";

const Container = (props: any) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
