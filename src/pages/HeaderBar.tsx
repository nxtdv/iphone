import styles from "./HeaderBar.module.scss";
import CurrentTime from "../components/times/CurrentTime";
import batterie from "/batterie.svg";
import wifi from "/Wifi.svg";
import mobilesignal from "/MobileSignal.svg";

type Locked = {
  lock: boolean;
};

const HeaderBar = ({ lock }: Locked) => {
  return (
    <>
      {lock ? (
        <div className={`${styles.phoneHeader} ${styles.phoneHeaderLight}`}>
          <div className={styles.phoneHeaderLeft} />
          <div className={styles.phoneHeaderRight}>
            <img
              className={styles.phoneHeaderIcon}
              src={mobilesignal}
              alt="MobileSignal"
            />
            <img className={styles.phoneHeaderIcon} src={wifi} alt="wifi" />
            <img
              className={styles.phoneHeaderIcon}
              src={batterie}
              alt="batterie"
            />
          </div>
        </div>
      ) : (
        <div className={`${styles.phoneHeader} ${styles.phoneHeaderLight}`}>
          <div className={styles.phoneHeaderLeft}>
            <CurrentTime
              fontSize="10.5px"
              fontFamily="SF-Pro-Text-Semibold"
              lineHeight="22px"
              letterSpacing="-0.41px"
            />
          </div>
          <div className={styles.phoneHeaderRight}>
            <img
              className={styles.phoneHeaderIcon}
              src={mobilesignal}
              alt="MobileSignal"
            />
            <img className={styles.phoneHeaderIcon} src={wifi} alt="wifi" />
            <img
              className={styles.phoneHeaderIcon}
              src={batterie}
              alt="batterie"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderBar;
