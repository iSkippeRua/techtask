import React from "react";

function CountryCard ({name, region, area}) {
    return(
        <div>
            <div className="labelBlock">
                <p>{name}</p>
            </div>
            <div className="infoBlock">
                <p>{region}</p>
                <p>{area}</p>
            </div>
        </div>
    );
}

export default CountryCard;