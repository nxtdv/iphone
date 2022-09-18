import { Suspense } from "react";
import styles from "./phone.module.scss";
import { LockScreen } from "./LockScreen";
import HeaderBar from "./HeaderBar";

function Phone() {
  const loading = () => <div className={styles.loading}>Chargement...</div>;

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneCoque} />

      <Suspense fallback={loading()}>
        <div className={styles.phoneContent}>
          <LockScreen>
            <HeaderBar lock={false} />
            <div className={styles.container}>
              <p>children</p>
            </div>
          </LockScreen>
        </div>
      </Suspense>
    </div>
  );
}

export default Phone;
