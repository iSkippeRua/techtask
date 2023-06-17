import React from "react";

function CountryCard ({name, region, area}) {
    return(
        <div>
            <p>{name}</p>
            <p>{region}</p>
            <p>{area}</p>
        </div>
    );
}

export default CountryCard;