import styles from "./Home.module.scss";
import HeaderBar from "../../components/HeaderBar/HeaderBar";

function Home() {
  return (
    <>
      <HeaderBar lock={false} />
      <div className={styles.container}>
        <p>children</p>
        <h3>Je suis dans le components Home</h3>
      </div>
    </>
  );
}

export default Home;
