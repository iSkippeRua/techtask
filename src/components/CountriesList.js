import React, { useState } from "react";
import './CountriesList.css';
import CountryCard from "./CountryCard";
import { v4 as uuidv4 } from 'uuid';

function CountriesList ({countriesData}) {

    const [buttonArrowStatus, setButtonArrowStatus] = useState(false);

    const sortAscending = () => {
        setButtonArrowStatus(false);
    }
    
    const sortDescending = () => {
        setButtonArrowStatus(true);
    }

    const statusFalse = <ul className="countryList">
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
                        </ul>

    const statusTrue = <ul className="countryList">
                            {countriesData.reverse().map((country) => {
                                return(
                                    <CountryCard 
                                        key={uuidv4()}
                                        name={country.name}
                                        region={country.region}
                                        area={country.area}
                                    />
                                );
                            })}
                        </ul>

    return (
        <div className="countryListContainer">

            <div className='sortContainer'>
                {buttonArrowStatus ? <button className='sortButton' onClick={sortAscending}>Sort <i className='arrow down'></i></button> : <button className='sortButton' onClick={sortDescending}>Sort <i className='arrow up'></i></button>}
            </div>

            {buttonArrowStatus ? statusFalse : statusTrue}

        </div>
    );
};

export default CountriesList;