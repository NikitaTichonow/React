import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TempAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    humidity,
    speed,
    feels_like,
  },
  units,
}) => {
  const vertDetail = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Ощущается как",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Влажность",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Скорость ветра",
      value: `${speed.toFixed()} ${units === 'metric' ? 'km/h' : 'm/s'}`,
    },
  ];

  const horizDetail = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Восход",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Закат",
      value: sunset,
    },
    // {
    //   id: 3,
    //   Icon: MdKeyboardArrowUp,
    //   title: "Высота",
    //   value: `${temp_max.toFixed()}°`,
    // },
    // {
    //   id: 4,
    //   Icon: MdKeyboardArrowDown,
    //   title: "Низ",
    //   value: `${temp_min.toFixed()}°`,
    // },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between py-3">
        <img
          src={icon}
          alt="weather icon"
          className="w-20"
        />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-3 items-start">
          {vertDetail.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className=" flex font-light text-sm items-center justify-center"
            >
              <Icon size={20} className="mr-1" />
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-row items-center justify-center space-x-10
           text-sm py-3"
      >
        {horizDetail.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-row items-center">
            <Icon size={30} />
            <p className="font-light ml-1">
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
