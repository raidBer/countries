import { useParams, useNavigate } from "react-router-dom";

function CountryPage({ countries, loading }) {
  const { country } = useParams();

  let countryData = countries.find((item) => {
    return item && item.name === country;
  });

  let navigate = useNavigate();

  return (
    !loading && (
      <div className="text-white dark:text-veryDarkBlue2 py-8 sm:px-20 md:py-12 px-7 dark:bg-white bg-veryDarkBlue min-w-full min-h-screen font-nunito1">
        <button
          className="mb-12 bg-darkBlue dark:bg-white rounded shadow-black shadow-md w-fit flex px-5 py-1 items-center content-center"
          onClick={() => navigate("/")}
        >
          <svg
            className="h-5 mr-3 fill-white dark:fill-veryDarkBlue2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          Back
        </button>
        <div className="md:grid md:grid-cols-2 md:gap-10">
          {/* container of image and info sections */}
          <img
            src={countryData.flags.png}
            alt={countryData.name}
            className="md:rounded md:my-10 md:h-auto md:w-[38vw] rounded-lg w-96 mx-auto h-52 transition-all mb-10"
          />
          <div className="text-lg md:text-base">
            {/* info section */}
            <div className="font-nunito3 text-2xl mb-14 md:mb-8">
              {countryData.name}
            </div>
            <div className="md:flex md:justify-between w-full">
              <div className="w-fit">
                <div className="mb-2">
                  <span className="font-nunito3">Native Name: </span>
                  {countryData.nativeName}
                </div>

                <div className="mb-2">
                  <span className="font-nunito3">Population:</span>{" "}
                  {countryData.population}
                </div>

                <div className=" mb-2">
                  <span className="font-nunito3">Region:</span>{" "}
                  {countryData.region}
                </div>

                <div className=" mb-2">
                  <span className="font-nunito3">Sub Region:</span>{" "}
                  {countryData.subregion}
                </div>

                <div className="mb-14 md:mb-8">
                  <span className="font-nunito3">Capital:</span>{" "}
                  {countryData.capital || "no capital"}
                </div>
              </div>
              <div className="w-fit">
                <div className=" mb-2">
                  <span className="font-nunito3">Top Level Domain: </span>
                  {countryData.topLevelDomain && countryData.topLevelDomain[0]}
                </div>

                <div className=" mb-2">
                  {countryData.currencies && (
                    <span className="font-nunito3">Currencies: </span>
                  )}
                  {countryData.currencies &&
                    countryData.currencies.map(
                      (currency, index) =>
                        currency.name +
                        (index === countryData.currencies.length - 1
                          ? "."
                          : ", ")
                    )}
                </div>

                <div className="md:mb-8 mb-14">
                  {countryData.languages && (
                    <span className="font-nunito3">Languages: </span>
                  )}
                  {countryData.languages &&
                    countryData.languages.map(
                      (language, index) =>
                        language.name +
                        (index === countryData.languages.length - 1
                          ? "."
                          : ", ")
                    )}
                </div>
              </div>
            </div>

            {countryData.borders && (
              <div className="text-lg mb-4 font-nunito3">
                Border Countries:{" "}
              </div>
            )}
            <div className="flex flex-wrap mx-auto hover:cursor-pointer">
              {countryData.borders &&
                countryData.borders.map(
                  (code3, index) =>
                    code3 !== "ISR" && (
                      <div
                        key={index}
                        className="dark:text-veryDarkBlue2 h-fit dark:shadow-lg text-center font-nunito2 text-veryLightGray mr-4 w-fit my-2 py-1 rounded-md px-3 dark:bg-white bg-darkBlue text-lg w"
                        onClick={() => {
                          navigate(
                            "/" +
                              countries.find((e) => e.alpha3Code === code3).name
                          );
                        }}
                      >
                        {countries.find((e) => e.alpha3Code === code3).name}
                      </div>
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default CountryPage;
