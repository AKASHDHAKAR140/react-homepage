import React from 'react'

function Colom() {
    return (

        <div className="container">

            <div className="row align-items-center p-5">
                <div className="col-lg-6 col-md-6 col-12">
                    <div class="elementor-heading-title elementor-size-default text-white"><h1>Online Classes</h1></div>
                    <div class="elementor-widget-container">
                        <p class="elementor-heading-title elementor-size-default text-white">Dear Students/Parents, Nifa presents its Learning App <br />for your regular art practice in which we have added <br /> many amazing features Like: Step-by-step recorded <br /> demo videos prepared by your faculty members.<br /> Regular assessment of your practise through <br />assignment section. Live class section from same app.<br /> Attendance, payment invoice, art news,<br /> announcements, important information and direct<br /> connect with the management team are some more<br /> features. So hurry up n join now to experience <br />personalised coaching by experts sitting at your home.
                        </p>		</div>
                    <p className='text-white' >We wish u Happy Learning. Stay Safe n Healthy.</p>
                    <button className='btn-1'>Read More</button>
                    <h5 className='text-white'>Download the app</h5>
                    <img style={{ height: 60, width: 150 }} src="https://www.nifafinearts.com/images/gplay.png" />
                    <img style={{ height: 60, width: 150 }} src="https://www.nifafinearts.com/images/appstore.png" />
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-5 p-3"  >
                    <iframe width="500" height="301" src="https://www.youtube.com/embed/-9cJjaLXKqE" title="NIFA ( Best Art Institute )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

            </div>
        </div>

    )
}

export default Colom