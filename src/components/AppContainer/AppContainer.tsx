import { PropsWithChildren } from "react";
import HeaderBar from "../HeaderBar/HeaderBar";
import HomeBar from "../HomeBar/HomeBar";

type Props = {
  isDarkMode?: boolean;
  showStatusBar?: boolean;
  showHomeButton?: boolean;
  inMode?: boolean;
};

function AppContainer({
  children,
  showStatusBar = true,
  isDarkMode,
  showHomeButton = true,
  inMode = false,
}: PropsWithChildren<Props>) {
  return (
    <>
      {showStatusBar && (
        <HeaderBar lock={false} isDarkMode={isDarkMode} inMode={inMode} />
      )}
      {children}
      {showHomeButton && <HomeBar isDarkMode={isDarkMode} />}
    </>
  );
}

export default AppContainer;
