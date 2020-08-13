import React from "react";

function EmployeeTableHeader(props) {
  return (
    <tr>
      <th scope="col">Image</th>
      <th scope="col" onClick={props.handleSort} id="name">
        <i className="fas fa-sort" onClick={props.handleSort} id="name"></i>
        Name
      </th>
      <th scope="col" onClick={props.handleSort} id="role">
        <i className="fas fa-sort" onClick={props.handleSort} id="role"></i>
        Role
      </th>
      <th scope="col" onClick={props.handleSort} id="phone">
        <i className="fas fa-sort" onClick={props.handleSort} id="phone"></i>
        Phone
      </th>
      <th scope="col" onClick={props.handleSort} id="email">
        <i className="fas fa-sort" onClick={props.handleSort} id="email"></i>
        Email
      </th>
      <th scope="col">DOB</th>
    </tr>
  );
}

export default EmployeeTableHeader;