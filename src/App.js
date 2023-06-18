import React, {useState} from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountriesFilter from './components/CountriesFilter';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filterTextValue, setFilterTextValue] = useState('all')

  const loadData = () => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())
      .then((json) => {
        setCountriesData(json);
        setLoaded(true);
      });
  };

  const lithuaniaArea = 65300.0;

  const filteredCountriesList = countriesData.filter((country) => {
    if(filterTextValue === 'oceania'){
      return country.region === 'Oceania';
    } else if(filterTextValue === 'area') {
      return country.area < lithuaniaArea;
    } else {
      return country;
    }
  });

  const onFilterValueSelected = (filterValue) => {
    setFilterTextValue(filterValue);
  }

  return (
    <div className='container'>

      <div className='text_container'>
        <p className='introText'>Hello!</p>
        <p className='introText'>This is my solution of the REIZ technical task.</p>
        <p className='introText'>To load data, click to the "LOAD THE DATA" button. After that you will be able to filter them and also to sort them alphabetically.</p>
        <p className='introText'>I hope, that you liked my solution. Have a nice day!</p>
      </div>

      <CountriesFilter filterValueSelected={onFilterValueSelected} />
      
      <div className='list_container'>
        {loaded ? <CountriesList countriesData={filteredCountriesList} /> : <button className='loadButton' onClick={loadData}>Load the data</button>}
      </div>
    </div>
  );
}

export default App;
