import React from "react";

function EmployeeTableRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.role}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
  );
}

export default EmployeeTableRow;
