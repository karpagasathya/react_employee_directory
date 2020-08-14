import React from "react";
import "./style.css";

function Header() {
    return (
      <div className="header-container">
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <h1>
              <strong>Employee Directory</strong>
            </h1>
            <h6>Click on the sort icon or filter using search box to narrow your results.</h6>
          </div>
        </div>
      </div>
    );
}

export default Header; 
