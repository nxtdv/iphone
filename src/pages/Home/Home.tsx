import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import appsRoutes from "../Apps/appsRoutes";
import AppContainer from "../../components/AppContainer/AppContainer";
import AppIcon from "../../components/AppIcon/AppIcon";
import styles from "./Home.module.scss";

function Home() {
  const navigate = useNavigate();
  const functioningApps = useMemo(() => {
    return appsRoutes.map((app) => {
      const onClick = () => navigate(app.destination);

      return (
        <AppIcon
          key={app.id}
          title={app.title}
          iconPath={app.iconPath}
          onClick={onClick}
        />
      );
    });
  }, [navigate]);

  return (
    <div className={styles.home}>
      <AppContainer showHomeButton={false}>
        <div className={styles.page}>
          <div className={styles.appsContainer}>{functioningApps}</div>
        </div>
      </AppContainer>
    </div>
  );
}

export default Home;
