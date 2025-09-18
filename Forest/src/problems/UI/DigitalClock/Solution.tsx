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
        border: "1rem solid darkgray",
        width: "fit-content",
        padding: "1rem",
        background: "black",
        borderRadius: "5px",
      }}
    >
      {/** hour */}
      <TimeComponent time={Math.floor(hours / 10)} />
      <TimeComponent time={hours % 10} semicolon />
      {/** minute */}
      <TimeComponent time={Math.floor(minutes / 10)} />
      <TimeComponent time={minutes % 10} semicolon />
      {/** seconds */}
      <TimeComponent time={Math.floor(seconds / 10)} />
      <TimeComponent time={seconds % 10} />
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

const TimeComponent = ({
  time,
  semicolon = false,
}: {
  time: number;
  semicolon?: boolean;
}) => {
  return (
    <div
      style={{
        fontWeight: "bold",
        fontSize: "7rem",
        color: "white",
      }}
    >
      {time}
      {semicolon && `:`}
    </div>
  );
};
