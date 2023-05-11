import { useState, useEffect } from "react";

import Weather from "./components/Weather";
import { getJSON } from "./services/helpers";
import "./App.css";

const App = function () {
  const [weatherData, setWeatherData] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getJSON();

      setWeatherData(data);
      setLoaded(true);
    };

    fetchWeatherData();
  }, []);

  const searchCity = (city) => {
    setWeatherData(city);
  };

  return (
    <>
      {loaded ? (
        <Weather searchCity={searchCity} weather={weatherData} />
      ) : (
        "Loading"
      )}
    </>
  );
};

export default App;
