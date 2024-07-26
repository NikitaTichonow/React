const TopButton = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Tokyo",
    },
    {
      id: 3,
      name: "Moscow",
    },
    {
      id: 4,
      name: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button 
          key={city.id} 
          className="text-lg font-medium "
          onClick={() => setQuery({q: city.name})}
          >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
