import * as React from "react";
import { useEffect, useState } from "react";

import TopButton from "./TopButton";
import Inputs from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";
import TemperatureAndDetails from "./TemperatureAndDetails";
import Forecast from "./Forecast";

import {
  formatTimeAndLocation,
  formatTempAndDetails,
  formatForecast,
} from "../services/helpers";

const Weather = function ({ weather, searchCity }) {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-20 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-2xl">
      <TopButton />
      <Inputs searchCity={searchCity} />

      <TimeAndLocation timeAndLoc={formatTimeAndLocation(weather)} />
      <TemperatureAndDetails tempAndDetails={formatTempAndDetails(weather)} />

      <Forecast title="hourly forecast" forecast={formatForecast(weather)} />
    </div>
  );
};

export default Weather;
