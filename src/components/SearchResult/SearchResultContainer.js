import React, { Component } from "react";
import EmployeeTable from "../Employee/EmployeeTable";
import EmployeesSeed from "../../utils/employeeList.json";
import SearchForm from "../SearchForm";

class SearchResultContainer extends Component {
  // Populating Components initial state with employees seeds from employeeList data
  state = {
    seed: EmployeesSeed,
    filteredEmployees: EmployeesSeed,
    sortOrder: "asc",
  };

  // filter employees by name as user types
  handleInputChange = (event) => {
    let filteredEmployeesSeed = this.state.seed.filter((employee) => {
      let employeeName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;
      return employeeName.includes(event.target.value.toLowerCase());
    });

    this.setState({
      filteredEmployees: filteredEmployeesSeed,
    });
  };

  // Sort the filteredEmployees result  in ascending or descending order based on the table header category that is clicked by user
  handleSort = (event) => {
    const sortByCategory = event.target.getAttribute("id");

    if (this.state.sortOrder === "asc") {
      let sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
        switch (sortByCategory) {
          case "name":
            return a.name.first > b.name.first ? 1 : -1;
          default:
            return a[sortByCategory] > b[sortByCategory] ? 1 : -1;
        }
      });
      this.setState({
        filteredEmployees: sortedEmployees,
        sortOrder: "desc",
      });
    } else {
      let sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
        switch (sortByCategory) {
          case "name":
            return a.name.first < b.name.first ? 1 : -1;
          default:
            return a[sortByCategory] < b[sortByCategory] ? 1 : -1;
        }
      });
      this.setState({
        filteredEmployees: sortedEmployees,
        sortOrder: "asc",
      });
    }
  };

  render() {
    return (
      <div className="text-center">
        <SearchForm handleInputChange={this.handleInputChange} />
        <EmployeeTable employees={this.state.filteredEmployees} handleSort={this.handleSort} />
      </div>
    );
  }
}

export default SearchResultContainer;
