import { useState } from "react";

function Dropdown({ region, changeRegion }) {
  const [isOpen, setOpen] = useState(false);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  const regions = ["all", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="relative z-50 drop-shadow-md mt-5 mx-auto w-fit h-16 md:mt-8">
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
        className="w-[60vw] flex justify-between py-4 px-5 transition-all duration-300 bg-darkBlue rounded dark:bg-white md:w-[25vw] "
      >
        <span className="text-veryLightGray transition-all duration-300 dark:text-veryDarkBlue2">
          {region}
        </span>
        <svg
          className="h-5 fill-white transition-all duration-300 dark:fill-veryDarkBlue2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
        </svg>
      </button>

      {isOpen && (
        <div className="text-veryLightGray transition-all duration-300 dark:text-veryDarkBlue2 flex flex-col w-[60vw] py-4 px-8 mt-1 bg-darkBlue dark:bg-white rounded md:w-[25vw]">
          {regions.map((region) => (
            <div
              key={region}
              className="mt-1 hover:cursor-pointer hover:text-darkGray"
              onClick={() => {
                changeRegion(region);
                setOpen(false);
              }}
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
