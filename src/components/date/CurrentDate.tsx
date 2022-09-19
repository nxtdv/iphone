import { useEffect, useState } from "react";

function strUcFirst(a: string) {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
}

const CurrentDate = () => {
  const [date, setDate] = useState(new Date());
  const updateDate = () => setDate(new Date());
  let dateInterval: undefined | number | NodeJS.Timeout;

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
        fontFamily: "SF-Pro-Display-Medium",
        fontSize: "11px",
        lineHeight: "24px",
        letterSpacing: "0.38px",
        color: "rgba(255, 255, 255, 0.8)",
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
