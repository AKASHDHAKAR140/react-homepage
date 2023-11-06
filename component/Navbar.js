import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" >
      <div className="container-fluid d-flex justify-content-around"  >
        <div >
          <img height={"60px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJhaWGpA1DBaCjrhXhcZRKbvuBJclnJwp6ZFV09ff&s" />
        </div>
        <div>   
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto" style={{ fontSize: "14px", }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about1">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">Admission</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">Arts Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">Franchise</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">Online Classes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">Videos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">Pay Fee</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">Contact</Link>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar