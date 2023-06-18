import React from "react";
import './CountryCard.css';

function CountryCard ({name, region, area}) {
    return(
        <div className="countryCard">
            <div className="labelBlock">
                <p className="labelText">Country: {name}</p>
            </div>
            <div className="infoBlock">
                <p className="infoText">Region: {region}</p>
                <p className="infoText">Area: {area}</p>
            </div>
        </div>
    );
}

export default CountryCard;