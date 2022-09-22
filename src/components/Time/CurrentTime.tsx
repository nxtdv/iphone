import { useState, useEffect } from "react";

interface Time {
  fontSize?: string;
  fontFamily: string;
  lineHeight: string;
  letterSpacing: string;
  height?: string;
  color: string;
  isDarkMode?: boolean;
}

const CurrentTime = ({
  fontSize,
  fontFamily,
  lineHeight,
  letterSpacing,
  height,
  color,
  isDarkMode = false,
}: Time) => {
  const [date, setDate] = useState(new Date());
  let dateInterval: undefined | number | NodeJS.Timeout;

  const updateDate = () => setDate(new Date());

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
        color: isDarkMode ? "#000" : color,
        display: "flex",
        alignItems: "center",
      }}
    >
      {date.getHours()}:
      {(date.getMinutes() < 10 ? "0" : "") + date.getMinutes()}
    </div>
  );
};

export default CurrentTime;
