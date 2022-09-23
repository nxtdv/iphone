import { PropsWithChildren } from "react";
import HeaderBar from "../HeaderBar/HeaderBar";
import HomeBar from "../HomeBar/HomeBar";

type Props = {
  isDarkMode?: boolean;
  showStatusBar?: boolean;
  showHomeButton?: boolean;
};

function AppContainer({
  children,
  showStatusBar = true,
  isDarkMode,
  showHomeButton = true,
}: PropsWithChildren<Props>) {
  return (
    <>
      {showStatusBar && (
        <HeaderBar lock={false} isDarkMode={isDarkMode} isAppContainer />
      )}
      {children}
      {showHomeButton && <HomeBar isDarkMode={isDarkMode} />}
    </>
  );
}

export default AppContainer;
