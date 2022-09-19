import { useEffect, useState } from "react";
import styles from "./currentDate.module.scss";

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
    <div className={styles.date}>
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
