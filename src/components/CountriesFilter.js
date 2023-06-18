import React from "react";

function CountriesFilter ({filterValueSelected}) {

    const onFilterValueChanged = (event) => {
        filterValueSelected(event.target.value);
    }

    return(
        <div className="filterContainer">
            <select name='filter' onChange={onFilterValueChanged}>
                <option value='all'>All</option>
                <option value='area'>Area smaller then Lithuania</option>
                <option value='oceania'>Region is Oceania</option>
            </select>
        </div>
    );
}

export default CountriesFilter;