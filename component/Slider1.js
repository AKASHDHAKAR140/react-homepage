import React from 'react'

function Slider1() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption slider-inner">
       
      </div>
    </div>
    <div className="carousel-item ">
      <img src="https://www.nifafinearts.com/banner-images/1550551577home-banner1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption slider-inner">
     
    </div>
      
    </div>
    
    <div className="carousel-item">
      <img src="https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption slider-inner">
      
    </div>
    </div>

    <div className="carousel-item">
      <img src="https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption slider-inner">
       
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider1