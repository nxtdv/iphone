import { useNavigate } from "react-router-dom";
import styles from "./HomeBar.module.scss";

type Props = {
  isDarkMode?: boolean;
};

function HomeBar({ isDarkMode }: Props) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div
      className={styles.container}
      style={{ background: isDarkMode ? "#000" : "#fff" }}
      onClick={goHome}
    ></div>
  );
}

export default HomeBar;
