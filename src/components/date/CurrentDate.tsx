import { useState, useEffect } from "react";

function strUcFirst(a: string) {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
}

const CurrentDate = () => {
  const [date, setDate] = useState(new Date());
  const updateDate = () => setDate(new Date());
  let dateInterval: any;

  useEffect(() => {
    dateInterval = setInterval(updateDate, 10000);
    return () => {
      if (dateInterval) clearInterval(dateInterval);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        fontFamily: "SF-Pro-Text-Semibold",
        fontSize: "11px",
        lineHeight: "24px",
        letterSpacing: "-0.41px",
        color: "rgba(255, 255, 255, 0.7)",
      }}
    >
      {strUcFirst(
        date.toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })
      )}
    </div>
  );
};

export default CurrentDate;
