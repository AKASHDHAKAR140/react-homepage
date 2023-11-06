import React from "react";
import Slider1 from "../component/Slider1";
import Colom from "../component/Colom";

import ImageGrid from "../component/ImageGrid";
import Card1 from "../component/Card1";
import Marquee from "react-fast-marquee";
import Videos from "../component/Videos";

function Home() {
  return (
    <div>
      <Slider1 />
      <div className="d-flex justify-content-evenly">
        <div>
          Nifa Updates:
        </div>
        <div>
          <marquee width="100%"
          >
            <strong style={{ color: "linear-gradient( 90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%) " }}>
              All NIFA courses are now available worldwide through our Live and
              Interactive Online Classes. Please download the NIFA app from our
              online classes page to register for a complimentary trial class.
            </strong>
          </marquee>{" "}
        </div>

      </div>
      <div className="me-auto  App-header mt-5 mb-5">
        <p style={{ fontSize: "36px", fontWeight: "500" }}>
          Welcome To <spam>National Institute of Fine Arts </spam>
        </p>
        <p>
          National Institute of Fine Arts (NIFA) is a national center for
          education in arts, fostering the excellence of emerging and
          established artists and
          <br /> advancing art to create a more human world. National Institute
          of Fine Arts (NIFA) was established by MRS RENU KHERA in Delhi and NCR
          of <br />
          Delhi on July 2005. Institute established another unit in Panna (M.P)
          which is affiliated to Raja Mansingh Music and Arts University
          (Gwalior).
          <br /> Its aim is to provide education and training to students on a
          wide spectrum of Fine Arts.
        </p>
        <p>
          National Institute of Fine Arts .is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes. We seek to <br /> shape the global future of arts with an
          emphasis on excellence that allows its members to reach for the
          highest artistic standards as individuals <br />
          while recognizing that the Art is one of the foundations of a healthy
          and creative society. This is a place where national and international
          leaders <br />
          in the arts gather, teach, show and perform their work. The institute
          prides itself on its openness and on creating an environment that is
          safe,
          <br /> welcoming, and built on mutual respect
        </p>
        <p>
          <strong>
            National Institute of Fine Arts is a place where the creative
            expression of individuals is nurtured and a sense of community
            flourishes.
          </strong>
        </p>
        <button className="btn-1" >Read More</button>
      </div>
      <div className="image-7 mt-5">
        <Colom />
      </div>

      <div className="image-11 App-header ">
        <h2>our course</h2>
        <div className="my-5">
          <Card1 />
        </div>
      </div>

      <div className="my-5 App-header">
        <h2>students work</h2>{" "}
        <div className="">
          <ImageGrid />{" "}
        </div>
      </div>
      <div></div>
      <div className="image-9">
        <h5 className="App-header text-white">Students Testimonial</h5>
        <Videos />
      </div>
    </div>
  );
}

export default Home;
