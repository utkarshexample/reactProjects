import { useEffect, useState } from "react";

function AppClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        The Current time is : {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </div>
    </>
  );
}

export default AppClock;
