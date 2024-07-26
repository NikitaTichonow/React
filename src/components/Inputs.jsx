import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({setUnits, setQuery}) => {
  const [city, setCity] = useState('')



  const handleSearchClick = () => {
    if(city != '') setQuery({q: city})
  }

  const handleLocationClick = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords
        setQuery({lat: latitude, lon: longitude})
      })
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value = {city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Поиск города....."
          className="text-black text-xl font-light p-1 w-full shadow-xl 
            capitalize fo focus:outline-none placeholder:lowercase"
        />

        <BiSearch
          size={35}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={35}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button 
        className="text-2xl font-medium transition ease-out hover:scale-125"
        onClick={() => setUnits('metric')}
        >
          °C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button 
        className="text-2xl font-medium transition ease-out hover:scale-125"
        onClick={() => setUnits('imperial')}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
