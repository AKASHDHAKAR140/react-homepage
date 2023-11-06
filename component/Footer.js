import React from 'react'

function Footer() {
  return (

    <div id="footer-container2 ">
      <footer>
        <div className="container-fluid nfotcont py-5 image-8">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-12">
                <p className="nfothed mx-4">Company</p>
                <ul className="">
                  <li className="list-group-item">About</li>
                  <li className="list-group-item">Facilities</li>
                  <li className="list-group-item">Career</li>
                  <li className="list-group-item">Contact us</li>
                  <li className="list-group-item"> Conditions</li>
                  <li className="list-group-item">Refund Policy</li>
                  <li className="list-group-item"><a href="privacy-policy.php">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3 col-12 fotcol4">
                <p className="nfothed mx-4">Activities</p>
                <ul className="">
                  <li className="list-group-item">Art Gallery</li>
                  <li className="list-group-item">Workshops</li>
                  <li className="list-group-item">Outdoor Activities</li>
                  <li className="list-group-item">Media Coverage</li>
                  <li className="list-group-item">Art Events</li>
                  <li className="list-group-item">Exhibition</li>
                  <li className="list-group-item">Daily Activities</li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3 col-12 fotcol4">
                <p className="nfothed mx-4">Popular Course</p>
                <ul className="">
                  <li className="list-group-item">Diploma in Fine Arts</li>
                  <li className="list-group-item">Certificate Hobby Course</li>
                  <li className="list-group-item">Entrance Preparation</li>
                  <li className="list-group-item">BFA</li>
                  <li className="list-group-item">Animation Sketching</li>
                  <li className="list-group-item">Kids Diploma</li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3 col-12 fotcol4">
                <p className="nfothed mx-4">Our Locations</p>
                <ul className="">
                  <li className="list-group-item">Gurgaon (Dlf Phase - 4)</li>
                  <li className="list-group-item">Mumbai (Andheri West)</li>
                  <li className="list-group-item">South Delhi (Kailash Colony)</li>
                  <br /><p className="nfothed">International Branches</p>
                  <li className="list-group-item">London</li>
                  <li className="list-group-item">USA</li>
                  <li className="list-group-item">Dubai, UAE</li>
                </ul>

              </div>
            </div>
            <div className="row nfotrow2">
              <div className="col-md-5 col-lg-5 col-xs-12">
                <p className="nfothed mt-4 mt-sm-0">NIFA is a unit of Nifaedutech Pvt Ltd.</p>
                <p className="nfothed mt-4 mt-sm-0">Connect with us</p>
                <p><a href="tel:9555112200" target="_top">9555112200</a>,<a href="tel:9810130552" target="_top">9810130552</a> </p>
                <p><a href="mailto:admission@nifafinearts.com" target="_top">admission@nifafinearts.com</a></p>
                <ul className="list-inline nfot-soclist">
                  <li className="list-inline-item"><a href="https://www.facebook.com/nifafinearts" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                  <li className="list-inline-item"><a href="https://twitter.com/artsnifa?lang=en" target="_blank"><i className="fab fa-twitter" /></a></li>
                  <li className="list-inline-item"><a href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed" target="_blank"><i className="fab fa-instagram" /></a></li>
                  <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw" target="_blank"><i className="fab fa-youtube" /></a></li>
                </ul>
              </div>
              <div className="col-md-7 col-lg-7 col-xs-12">
                <p className="nfothed text-right">Download the app</p>
                <ul className="list-inline nappimg text-right mb-0">
                  <li className="list-inline-item"><img style={{ height: 30, width: 100 }} src="https://www.nifafinearts.com/images/gplay.png" /></li>
                  <li className="list-inline-item"><img style={{ height: 30, width: 100 }} src="https://www.nifafinearts.com/images/appstore.png" /></li>
                </ul>
                <p className="nfotbotline text-right mb-0">© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="whatsapp">
          <a target="_blank" href="https://api.whatsapp.com/send?phone=919555112200"><i className="fab fa-whatsapp" /></a>
        </div>
      </footer>
    </div>




  )
}

export default Footer