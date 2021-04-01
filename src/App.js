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

  render() {
    return (
          <Wrapper>
            <Header />
            <Search findCountry={this.findCountry} />
            <Table shownEmployees={this.state.shownEmployees} />
          </Wrapper>
    );
  }
}

export default App;
