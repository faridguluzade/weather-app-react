import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails({ tempAndDetails }) {
  const {
    status,
    icon,
    windKm,
    humidity,
    feelTemp,
    tempC,
    sunrise,
    sunset,
    maxtempC,
    mintempC,
  } = tempAndDetails;

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{status}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={icon} alt="" className="w-20" />
        <p className="text-5xl ml-8">{tempC}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell: <span className="font-medium ml-1">{feelTemp}°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity: <span className="font-medium ml-1">{humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind: <span className="font-medium ml-1">{windKm}km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-around space-x-1 text-white text-sm py-3">
        <UilSun />
        <p className="font-light ">
          Rise: <span className="font-medium mr-1">{sunrise}</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light ">
          Set: <span className="font-medium ml">{sunset}</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{Math.floor(+maxtempC)}°</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light ">
          Low:{" "}
          <span className="font-medium ml-1">{Math.floor(+mintempC)}°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
