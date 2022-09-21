import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import appsRoutes from "../Apps/appsRoutes";
import styles from "./Home.module.scss";
import AppIcon from "../../components/AppIcon/AppIcon";
import HeaderBar from "../../components/HeaderBar/HeaderBar";

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
    <>
      <HeaderBar lock={false} />
      <div className={styles.home}>
        <div className={styles.page}>{functioningApps}</div>
      </div>
    </>
  );
}

export default Home;
