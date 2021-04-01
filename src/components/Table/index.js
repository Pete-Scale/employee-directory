import React, { Component } from 'react'
import API from '../../utils/API'
import Employee from '../Employee'
import TableHeader from '../TableHeader'
import './style.css'

class Table extends Component {
  state = {
    employees: [],
    shownEmployees: []
  }

  componentDidMount() {
    API.randomEmployee()
      .then(response => {
        // this.updateEmployees(response.data.results)
        this.setState({ 'employees': response.data.results, 'shownEmployees': response.data.results })
        console.log(this.state.employees)
      })
      .catch(err => console.log(err))
  }

  updateEmployees() {
    const filteredResults = this.state.employees.filter(employee => employee.location.country === this.props.countrySearched)
    // this.setState({ 'shownEmployees': filteredResults })
    console.log('results', filteredResults)
  }

  render() {
    this.updateEmployees()
    return (
        <div className="table-responsive table-styles">
          <table className="table">
            <TableHeader />
            <tbody>
              {this.state.shownEmployees.map((employee, index) => {
                return (
                  <Employee 
                    key={index}
                    employeeKey={index+1}
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
}

export default Table