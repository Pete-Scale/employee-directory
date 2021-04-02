import React from 'react'
import './tableHeader.css'

function TableHeader(props) {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Picture</th>
        <th scope="col" onClick={() => props.sortByFirst()} className="hoverHand">First</th>
        <th scope="col" onClick={() => props.sortByLast()} className="hoverHand">Last</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Location</th>
      </tr>
    </thead>
  )
}

export default TableHeader