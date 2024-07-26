import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
// import TopButton from "./components/TopButton";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [query, setQuery] = useState({q: 'arzamas'})
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);


  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }


  const getWeather = async () => {
    const cityName = query.q ? query.q : 'current location';
    toast.info(` Погода для города - ${capFirstLetter(cityName)}`)

    await getFormWeatherData({ ...query, units }).then((data) => {
      toast.success(`Данные получены для города - ${data.name}, ${data.country}`)
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);


  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === 'metric' ? 20:60
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700"
    return "from-yellow-600 to-orange-700"
  };


  return (
    <div
      className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br
    shadow-xl shadow-grey-400 ${formatBackground()}`}>

        

      {/* <TopButton setQuery={setQuery}/> */}
      <Inputs setQuery={setQuery} setUnits={setUnits}/>
      

      {weather && (
        <>
          <TimeAndLocation weather={weather}/>
          <TempAndDetails weather={weather} units={units}/>
          <Forecast title='Погода на 3 часа вперед' data={weather.hourly}/>
          <Forecast title='Погода на 5 дней'  data={weather.daily}/>
        </>
      )}



      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />

      
    </div>
  );
};

export default App;
