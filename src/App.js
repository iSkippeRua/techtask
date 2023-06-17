import React, {useState} from 'react';
import './App.css';
import CountriesList from './components/CountriesList';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const loadData = () => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())
      .then((json) => {
        setCountriesData(json);
        setLoaded(true);
      });
  };

  return (
    <div>
      {loaded ? <CountriesList countriesData={countriesData}  /> : <button onClick={loadData}>Load the data</button>}
    </div>
  );
}

export default App;
