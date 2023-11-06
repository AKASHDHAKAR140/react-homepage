import React from 'react'
import "../App.css"
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
function Nav() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark p-0 m-0" style={{ background: "linear-gradient(90deg, #812868 0%, #f954a4 100%)", fontSize: "14px" }}>
        <div className="container-fluid d-flex justify-content-around"  >
          <div>
            <a className="navbar-brand ms-auto" style={{ fontSize: "14px" }} href="#">Welcome to the National Institute of Fine Arts</a>
          </div>
          <div className='d-flex mt-2'>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto  text-white " >
              <li className="nav-item px-2" >
                <BsTelephone /> 9555112200
              </li>
              <li className="nav-item" >
                <BsTelephone /> 9555112200
              </li>
              <li className="nav-item px-2">
                <p> <AiOutlineMail /> admission@nifafinearts.com</p>
              </li>
              <li >
                <div className="d-flex justify-content-around">
                  <div className='ps-1'>
                    <BsFacebook />
                  </div>
                  <div className='ps-1'><AiFillTwitterSquare /> </div>
                  <div className='ps-1'><BsInstagram /> </div>
                  <div className='ps-1'><AiFillYoutube /> </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav