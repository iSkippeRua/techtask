import React from "react";
import './CountriesList.css';
import CountryCard from "./CountryCard";
import { v4 as uuidv4 } from 'uuid';

function CountriesList ({countriesData}) {
    return (
        <div>
            {countriesData.map((country) => {
                return(
                    <CountryCard 
                        key={uuidv4()}
                        name={country.name}
                        region={country.region}
                        area={country.area}
                    />
                );
            })}
        </div>
    );
};

export default CountriesList;