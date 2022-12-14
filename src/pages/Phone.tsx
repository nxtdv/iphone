import { Suspense, lazy, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import styles from "./phone.module.scss";
import { LockScreen } from "./LockScreen/LockScreen";
import appsRoutes from "./Apps/appsRoutes";

const Home = lazy(() => import("./Home/Home"));

function Phone() {
  const routes = useMemo(() => {
    return appsRoutes.map((app) => {
      const Element = app.element;
      return <Route key={app.id} path={app.route} element={<Element />} />;
    });
  }, []);

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneCoque} />

      <Suspense fallback={<Loading />}>
        <div className={styles.phoneContent}>
          <LockScreen>
            <BrowserRouter basename="/iphone/">
              <Routes>
                <Route path="/" element={<Home />} />
                {routes}
              </Routes>
            </BrowserRouter>
          </LockScreen>
        </div>
      </Suspense>
    </div>
  );
}

export default Phone;
