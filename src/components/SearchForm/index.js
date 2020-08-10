import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <div className="form-container">
        <form>
          <label>Filter Employee by Name:</label>
          <br />
          <input onChange={props.handleInputChange} className="input-box" type="text" placeholder="Search" />
        </form>
      </div>
    );
}
 
export default SearchForm;
