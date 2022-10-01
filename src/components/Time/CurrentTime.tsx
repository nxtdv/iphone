import { useState, useEffect } from "react";

interface Time {
  fontSize?: string;
  fontFamily: string;
  lineHeight: string;
  letterSpacing: string;
  height?: string;
  color: string;
  isDarkMode?: boolean;
  inMode?: boolean;
}

const CurrentTime = ({
  fontSize,
  fontFamily,
  lineHeight,
  letterSpacing,
  height,
  color,
  isDarkMode = false,
  inMode,
}: Time) => {
  const [date, setDate] = useState(new Date());
  let dateInterval: undefined | number | NodeJS.Timeout;

  const updateDate = () => setDate(new Date());
  const getHours = date.getHours();
  const getMinutes = date.getMinutes();

  useEffect(() => {
    dateInterval = setInterval(updateDate, 10000);
    return () => {
      if (dateInterval) clearInterval(dateInterval);
    };
  }, []);

  return (
    <div
      style={{
        fontSize: fontSize,
        fontFamily: fontFamily,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        height: height,
        color: isDarkMode ? (inMode ? "#fff" : "#000") : color,
        fontWeight: isDarkMode ? (inMode ? 0 : 900) : 0,
        display: "flex",
        alignItems: "center",
      }}
    >
      {getHours < 10 ? "0" + getHours : getHours}:
      {(getMinutes < 10 ? "0" : "") + getMinutes}
    </div>
  );
};

export default CurrentTime;
