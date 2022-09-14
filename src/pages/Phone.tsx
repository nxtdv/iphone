import { Suspense, useState } from "react";
import styles from "./phone.module.scss";
import HeaderBar from "./HeaderBar";
import CurrentTime from "../components/times/CurrentTime";
import CurrentDate from "../components/date/CurrentDate";

function Phone() {
  const [locked, setPhoneLocked] = useState(true);
  const loading = () => <div className={styles.loading}>Chargement...</div>;

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneCoque} />

      <Suspense fallback={loading()}>
        <div className={styles.phoneContent}>
          <HeaderBar lock={locked} />
          {locked ? (
            <div className={styles.locked}>
              <CurrentDate />
              <CurrentTime
                fontSize="70px"
                fontFamily="SF-Pro-Rounded-Medium"
                lineHeight="0"
                letterSpacing="-2.12px"
                height="62px"
              />
            </div>
          ) : (
            <div className={styles.locked}>Unlocked</div>
          )}
        </div>
      </Suspense>
    </div>
  );
}

export default Phone;
