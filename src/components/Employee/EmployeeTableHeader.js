import React from "react";

function EmployeeTableHeader(props) {
  return (
    <tr>
      <th scope="col" onClick={props.handleSort} id="name">
        <i className={props.sortByCategory === "name" ? "fas fa-sort hidden" : "fas fa-sort hidden"}></i>
        Name
      </th>
      <th scope="col" onClick={props.handleSort} id="role">
        <i className={props.sortByCategory === "role" ? "fas fa-sort" : "fas fa-sort hidden"}></i>
        Role
      </th>
      <th scope="col" onClick={props.handleSort} id="phone">
        <i className={props.sortByCategory === "phone" ? "fas fa-sort" : "fas fa-sort hidden"}></i>
        Phone
      </th>
      <th scope="col" onClick={props.handleSort} id="email">
        <i className={props.sortByCategory === "email" ? "fas fa-sort" : "fas fa-sort hidden"}></i>
        Email
      </th>
      <th scope="col" onClick={props.handleSort} id="dob">
        <i className={props.sortByCategory === "dob" ? "fas fa-sort" : "fas fa-sort hidden"}></i>
        DOB
      </th>
    </tr>
  );
}

export default EmployeeTableHeader;