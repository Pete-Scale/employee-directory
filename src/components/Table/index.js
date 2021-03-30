import React, { Component } from 'react'
import API from '../../utils/API'
import Employee from '../../components/Employee'
import './style.css'

class Table extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    API.randomEmployee()
      .then(response => {
        this.setState({ 'employees': response.data.results })
        console.log(this.state.employees)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Picture</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee, index) => {
                return (
                  <Employee 
                    key={index}
                    employeeKey={index+1}
                    image={employee.picture.thumbnail}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    location={`${employee.location.city}, ${employee.location.country}`}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
    )
  }
}

export default Table