import React, {Component} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './style.css'

function Search(props) {

  return (
    <InputGroup className="search-styles mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Country Name"
        aria-label="Country Name"
        aria-describedby="basic-addon1"
        onChange={(e)=> props.findCountry(e.target.value)}
      />
    </InputGroup>
  )
  
}

export default Search