import React from 'react'

function Employee(props) {
  return (
    <tr>
      <th scope="row">{props.employeeKey}</th>
      <td><img alt={props.firstName} src={props.image} /></td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.location}</td>
    </tr>
  )
}

export default Employee