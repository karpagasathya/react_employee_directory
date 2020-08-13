import React from "react";
import EmployeeTableHeader from "./EmployeeTableHeader";
import EmployeeTableRow from "./EmployeeTableRow";

function EmployeeTable(props) {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <table className="table table-striped table-responsive-lg">
            <thead>{<EmployeeTableHeader handleSort={props.handleSort} sortByCategory={props.sortByCategory} />}</thead>
            <tbody>
              {props.employees.map((employee) => (
                <EmployeeTableRow image={employee.image} name={employee.name.first + " " + employee.name.last} role={employee.role} phone={employee.phone} email={employee.email} dob={employee.dob} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTable;
