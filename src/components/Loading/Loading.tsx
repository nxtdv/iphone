import Spinner from "/spinner.gif";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img src={Spinner} alt="Loading" width={15} height={15} />
    </div>
  );
};

export default Loading;
