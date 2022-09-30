import { PropsWithChildren } from "react";
import styles from "./BottomNav.module.scss";

export const BottomNav = ({ children }: PropsWithChildren) => {
  return <div className={styles.bottomNav}>{children}</div>;
};
