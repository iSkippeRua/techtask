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
    <div className='container'>
      <div className='text_container'></div>

      <div className='button_container'>
        <div className="filterButtons">
          <button></button>
          <button></button>
        </div>
      </div>
      
      <div className='list_container'>
        {loaded ? <CountriesList countriesData={countriesData}  /> : <button className='loadButton' onClick={loadData}>Load the data</button>}
      </div>
    </div>
  );
}

export default App;
