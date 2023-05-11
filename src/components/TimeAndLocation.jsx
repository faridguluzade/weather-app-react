import React from "react";

function TimeAndLocation({ timeAndLoc }) {
  const { name, formattedTime } = timeAndLoc;

  const timeStr = `${formattedTime.toLocaleString("default", {
    weekday: "long",
  })}, ${formattedTime.getDate()} ${formattedTime.toLocaleString("default", {
    month: "short",
  })} ${formattedTime.getFullYear()} | Local time ${formattedTime.toLocaleString(
    "default",
    { hour: "numeric", minute: "numeric", hour12: true }
  )}`;

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{timeStr}</p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{name}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
