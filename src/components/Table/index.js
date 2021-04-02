import React from 'react'
import Employee from '../Employee'
import TableHeader from '../TableHeader'
import './style.css'

function Table(props) {
  return (
    <div className="table-responsive table-styles">
      <table className="table">
        <TableHeader sortByFirst={props.sortByFirst}/>
        <tbody>
          {props.shownEmployees.map((employee, index) => {
            return (
              <Employee
                key={index}
                employeeKey={index + 1}
                image={employee.picture.thumbnail}
                firstName={employee.name.first}
                lastName={employee.name.last}
                phone={employee.phone}
                email={employee.email}
                location={employee.location.country}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table