import { ReactSVG } from "react-svg";
import styles from "./HeaderBar.module.scss";
import CurrentTime from "../Time/CurrentTime";
import batterie from "/batterie.svg";
import wifi from "/Wifi.svg";
import mobilesignal from "/MobileSignal.svg";

type Props = {
  lock: boolean;
  isDarkMode?: boolean;
  inMode?: boolean;
};

const HeaderBar = ({ lock, isDarkMode, inMode }: Props) => {
  return (
    <div
      className={`${styles.phoneHeader} ${
        isDarkMode
          ? inMode
            ? styles.phoneHeaderLight
            : styles.phoneHeaderDark
          : styles.phoneHeaderLight
      }`}
      style={{ position: lock ? "relative" : "absolute" }}
    >
      {lock ? (
        <div className={styles.phoneHeaderLeft} />
      ) : (
        <div className={styles.phoneHeaderLeft}>
          <CurrentTime
            fontSize="10.5px"
            fontFamily="SF-Pro-Text-Regular"
            lineHeight="22px"
            letterSpacing="-0.41px"
            color="#fff"
            isDarkMode={isDarkMode}
            inMode={inMode}
          />
        </div>
      )}
      <div className={styles.phoneHeaderRight}>
        <ReactSVG className={styles.phoneHeaderIcon} src={mobilesignal} />
        <ReactSVG className={styles.phoneHeaderIcon} src={wifi} />
        <ReactSVG className={styles.phoneHeaderIcon} src={batterie} />
      </div>
    </div>
  );
};

export default HeaderBar;
