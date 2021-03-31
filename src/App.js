import React, {Component} from 'react'
import Wrapper from './components/Wrapper'
import Table from './components/Table'
import Header from './components/Header'
import Search from './components/Search'

class App extends Component {
  
  state = {
    countrySearched: ''
  }

  findCountry = (country) => {
    this.setState({'countrySearched': country})
  }

  render() {
    return (
          <Wrapper>
            <Header />
            <Search findCountry={this.findCountry} />
            <Table countrySearched={this.state.countrySearched} />
          </Wrapper>
    );
  }
}

export default App;
