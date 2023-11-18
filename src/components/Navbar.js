import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">JP store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mens
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/tshirt">T-shirt</Link></li>
            <li><Link className="dropdown-item" to="/shirt">Shirt</Link></li>
            <li><Link className="dropdown-item" to="/jeans">Jeans</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Womens
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/tshirt">Tshirt</Link></li>
            <li><Link className="dropdown-item" to="/shirt">Shirt</Link></li>
            <li><Link className="dropdown-item" to="/jeans">Jeans</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
      <div className="navicon">
      <i className="fa fa-heart-o"></i>
      </div>
        <div className="navicon">
        <i className="fa fa-shopping-cart"></i>
        </div>
        <Link to="/login"><button className="btn btn-outline-success">Login</button></Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
