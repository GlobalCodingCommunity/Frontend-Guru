import { useEffect, useState } from "react";

export function Clock() {
  const date = useCurrentTime();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        border: "5px solid darkgray",
        width: "fit-content",
        padding: "5px",
        background: "black",
        borderRadius: "5px",
      }}
    >
      <TimeComponent time={hours} semicolon />
      <TimeComponent time={minutes} semicolon />
      <TimeComponent time={seconds} />
    </div>
  );
}

const useCurrentTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return date;
};

const TimeComponent = ({ time, semicolon = false }: { time: number; semicolon?: boolean }) => {
  return (
    <div
      style={{
        fontWeight: "bold",
        fontSize: "3rem",
        color: "white",
      }}
    >
      {time.toString().padStart(2, "0")}
      {semicolon && `:`}
    </div>
  );
};
