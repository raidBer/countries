import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import MainPage from "./pages/MainPage";
import CountryPage from "./pages/CountryPage";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(false);

  const fetching = async () => {
    try {
      setLoading(true);
      //start fetching
      let response = await fetch(
        "https://restcountries.com/v2/all?fields=name,alpha3Code,flags,nativeName,topLevelDomain,flags,borders,capital,subregion,population,languages,region,currencies"
      );
      let Countries = await response.json();
      Countries = Countries.filter((c) => c.name !== "Israel");
      let palestine = Countries.findIndex(
        (obj) => obj.name === "Palestine, State of"
      );
      Countries[palestine].capital = "Jerusalem";
      setCountries(Countries);
      setLoading(false);
    } catch (e) {
      //fetch failed, loading ends
      console.log(e);
      setLoading(false);
    }
  };

  let toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    fetching();
  }, []);

  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <BrowserRouter>
      <NavigationBar toggleTheme={toggleTheme} />

      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              countries={countries}
              loading={loading}
              refetch={fetching}
            />
          }
        ></Route>
        <Route
          path="/:country"
          element={<CountryPage countries={countries} loading={loading} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
