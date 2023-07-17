import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import MainPage from "./pages/MainPage";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [theme, setTheme] = useState(false);

  const fetching = async () => {
    try {
      setErr(false);
      setLoading(true);
      //start fetching
      let response = await fetch(
        "https://restcountries.com/v2/all?fields=name,nativeName,topLevelDomain,flags,borders,capital,subregion,population,languages,region,currencies"
      );
      let Countries = await response.json();
      setCountries(Countries);
      setLoading(false);
    } catch (e) {
      //fetch failed, loading ends
      console.log(e);
      setErr(true);
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
              err={err}
              refetch={fetching}
            />
          }
        ></Route>
        {/* <Route
          path="/:country"
          element={<CountryPage countries={countries} loading={loading} />}
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
