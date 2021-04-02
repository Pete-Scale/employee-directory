import React, {Component} from 'react'
import API from './utils/API'
import Wrapper from './components/Wrapper'
import Table from './components/Table'
import Header from './components/Header'
import Search from './components/Search'

class App extends Component {
  
  state = {
    countrySearched: '',
    employees: [],
    shownEmployees: []
  }
  
  componentDidMount() {
    API.randomEmployee()
      .then(response => {
        // this.updateEmployees(response.data.results)
        this.setState({ 'employees': response.data.results, 'shownEmployees': response.data.results })
        // console.log(this.state.employees)
      })
      .catch(err => console.log(err))
  }

  updateEmployees() {
    const filteredResults = this.state.employees.filter(employee => employee.location.country === this.state.countrySearched)
    // this.setState({ 'shownEmployees': filteredResults })
    console.log('results', filteredResults)
    if(filteredResults.length) {
      this.setState({'shownEmployees': filteredResults})
    } else {
      this.setState({'shownEmployees': this.state.employees})
    }
  }

  findCountry = (country) => {
    this.setState({'countrySearched': country}, () => {
      this.updateEmployees()
    })
  }

  sortByFirst = () => {
    console.log(this.state)
    const sortedByFirstName = this.state.shownEmployees.sort((a, b) => {
      if(a.name.first < b.name.first) { return -1; }
      if(a.name.first > b.name.first) { return 1; }
      return 0;
    })
    console.log(sortedByFirstName)
    this.setState({'shownEmployees': sortedByFirstName})
  }

  sortByLast = () => {
    console.log(this.state)
    const sortedByLastName = this.state.shownEmployees.sort((a, b) => {
      if(a.name.last < b.name.last) { return -1; }
      if(a.name.last > b.name.last) { return 1; }
      return 0;
    })
    console.log(sortedByLastName)
    this.setState({'shownEmployees': sortedByLastName})
  }

  render() {
    return (
          <Wrapper>
            <Header />
            <Search findCountry={this.findCountry} />
            <Table shownEmployees={this.state.shownEmployees} sortByFirst={this.sortByFirst} sortByLast={this.sortByLast} />
          </Wrapper>
    );
  }
}

export default App;
