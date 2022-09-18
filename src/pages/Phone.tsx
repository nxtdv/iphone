import { Suspense } from "react";
import styles from "./phone.module.scss";
import { LockScreen } from "./LockScreen";

function Phone() {
  const loading = () => <div className={styles.loading}>Chargement...</div>;

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneCoque} />

      <Suspense fallback={loading()}>
        <div className={styles.phoneContent}>
          <LockScreen>
            <p>yo le rap</p>
          </LockScreen>
        </div>
      </Suspense>
    </div>
  );
}

export default Phone;
