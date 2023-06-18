import React from "react";
import "./Pagination.css"

function Pagination ({totalCountries, countriesPerPage, setCurrentPage, currentPage}) {

    let pages = [];

    for(let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++){
        pages.push(i);
    }

    return(
        <div className="pagination">
            {
                pages.map((page, index) => {
                   return <button onClick={() => setCurrentPage(page)} key={index} className={page === currentPage ? "active" : ""}>{page}</button>
                })
            }
        </div>
    );
}

export default Pagination;