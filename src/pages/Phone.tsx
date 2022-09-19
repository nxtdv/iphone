import { Suspense } from "react";
import styles from "./phone.module.scss";
import { LockScreen } from "./LockScreen/LockScreen";
import Home from "./Home/Home";

function Phone() {
  const loading = () => <div className={styles.loading}>Chargement...</div>;

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneCoque} />

      <Suspense fallback={loading()}>
        <div className={styles.phoneContent}>
          <LockScreen>
            <Home />
          </LockScreen>
        </div>
      </Suspense>
    </div>
  );
}

export default Phone;
