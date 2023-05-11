import React from "react";
import { useRef } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

import Searchbar from "./Searchbar";
import { getJSON } from "../services/helpers";

function Inputs({ searchCity }) {
  const cityName = useRef();

  const searchHandler = (e) => {
    e.preventDefault();
    const fetchCity = async () => {
      const data = await getJSON(cityName.current?.value);

      searchCity(data);
      cityName.current.value = "";
    };

    fetchCity();
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <form
        action=""
        className="flex flex-row w-3/4 items-center justify-center space-x-4"
        onSubmit={searchHandler}
      >
        <input
          type="text"
          placeholder="Search for city..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          ref={cityName}
        />
        {/* <Searchbar ref={cityName} /> */}
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={searchHandler}
        />
        <UilMapMarker
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </form>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl  text-white font-light">
          °C
        </button>
        <p className="text-lg text-white mx-1">|</p>
        <button name="imprerial" className="text-xl text-white font-light">
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
