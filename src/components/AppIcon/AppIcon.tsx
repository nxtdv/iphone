import styles from "./AppIcon.module.scss";

interface AppIconProps {
  title: string;
  iconPath: string;
  showLabel?: boolean;
  onClick?: () => void;
}

const AppIcon = ({
  title,
  iconPath,
  showLabel = true,
  onClick,
}: AppIconProps) => {
  return (
    <div className={styles.appIcon}>
      <img
        className={styles.icon}
        src={iconPath}
        alt={title}
        onClick={onClick}
      />
      {showLabel && <div className={styles.label}>{title}</div>}
    </div>
  );
};

export default AppIcon;
