export const API_URL =
  "http://api.weatherapi.com/v1/forecast.json?key=a58ec6b016444cb09d365337230805&q=";

export const getJSON = async function (searchCity = undefined) {
  try {
    const res = await fetch(API_URL + `${searchCity ? searchCity : "Baku"}`);

    if (!res.ok) throw new Error("Invalid city or something went wrong!");

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const formatTimeAndLocation = function (data) {
  const { name, localtime } = data.location;

  const formattedTime = new Date(localtime);

  return { name, formattedTime };
};

export const formatTempAndDetails = function (data) {
  const {
    condition: { text: status, icon },
    temp_c: tempC,
    feelslike_c: feelTemp,
    humidity,
    wind_kph: windKm,
  } = data.current;

  const {
    astro: { sunrise, sunset },
    day: { maxtemp_c: maxtempC, mintemp_c: mintempC },
  } = data.forecast.forecastday[0];

  return {
    tempC,
    feelTemp,
    humidity,
    windKm,
    status,
    icon,
    sunrise,
    sunset,
    maxtempC,
    mintempC,
  };
};

export const formatForecast = function (data) {
  const { last_updated_epoch: currentTime } = data.current;
  const { hour } = data.forecast.forecastday[0];

  const updatedHour = hour
    .filter((item) => item.time_epoch >= currentTime)
    .map((e) => ({
      time: new Date(e.time),
      icon: e.condition.icon,
      temp_c: Math.floor(e.temp_c),
    }));
  return updatedHour;
};
