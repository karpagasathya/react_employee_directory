import React, { Component } from "react";
import EmployeeTable from "../Employee/EmployeeTable";
import EmployeeList from "../../utils/employeeList.json";
import SearchForm from "../SearchForm";

class SearchResultContainer extends Component {
  state = {
    employees: EmployeeList,
    filteredEmployees: EmployeeList,
    sortMethod: "asc",
  };

  handleInputChange = (event) => {
    let filteredSeeds = this.state.employees.filter((employee) => {
      let employeeName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;
      return employeeName.includes(event.target.value.toLowerCase());
    });

    this.setState({
      filteredEmployees: filteredSeeds,
    });
  };

  handleSort = (event) => {
    const sortByCategory = event.target.getAttribute("id");

    if (this.state.sortMethod === "asc") {
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
        sortMethod: "desc",
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
        sortMethod: "asc",
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
