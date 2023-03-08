import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/banks">Banks</Link>
        </li>
        <li>
          <Link to="/creditCards">Credit Cards</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/cycles">Cycles</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Menu