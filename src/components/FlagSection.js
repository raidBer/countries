import FlagCard from "./FlagCard.js";
function FlagSection({ region, textSearch, countries }) {
  return (
    <div className="flex flex-wrap justify-center mx-6 w-fit">
      {region === "all"
        ? countries.map(
            (country) =>
              country.name.toLowerCase().includes(textSearch.toLowerCase()) && (
                <FlagCard
                  key={country.name}
                  name={country.name}
                  flag={country.flags.png}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              )
          )
        : countries.map(
            (country) =>
              region === country.region &&
              country.name.toLowerCase().includes(textSearch.toLowerCase()) && (
                <FlagCard
                  key={country.name}
                  name={country.name}
                  flag={country.flags.png}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              )
          )}
    </div>
  );
}

export default FlagSection;
