import SearchBar from "../components/SearchBar.js";
import Dropdown from "../components/DropDown.js";
import FlagSection from "../components/FlagSection.js";
import { useState, useEffect } from "react";
function MainPage({ countries, loading, err, refetch }) {
  const [region, changeRegion] = useState("all");
  const [textSearch, changeTextSearch] = useState("");

  // useEffect(() => {
  //   if (err) refetch;
  // }, []);

  return (
    <div className="bg-veryDarkBlue transition-all duration-300 dark:bg-veryLightGray py-10 w-full min-h-screen z-0">
      <div className="md:flex justify-between items-baseline">
        <SearchBar changeTextSearch={changeTextSearch} />
        <Dropdown region={region} changeRegion={changeRegion} />
      </div>
      {!loading && !err && (
        <FlagSection
          region={region}
          textSearch={textSearch}
          countries={countries}
        />
      )}
    </div>
  );
}

export default MainPage;
