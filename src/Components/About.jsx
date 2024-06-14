import React from 'react'
import './css/About.css'

const About = () => {
    return (
        <>
            <div className="home-page-welcome">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 order-2 order-lg-1">
                            <div className="welcome-content">
                                <header className="entry-header">
                                    <h2 className="entry-title">
                                        Welcome to Institute of Blessed Virigin Mary
                                    </h2>
                                </header>
                                <div className="entry-content mt-2">
                                    Loreto in India owes its origin to a visit by Dr Bakhaus to Loreto Abbey, Rathfarnham, Ireland, in 1840 to request Mother Teresa Ball to send sisters to set up a school for Catholic children in Calcutta. In response to this, Mother Teresa Ball sent 7 Loreto Sisters and 5 Postulants, all in their twenties, under the leadership of Delphine Hart to India, announcing that they would probably never see their homeland again. There was a formal welcome and religious ceremony at the Cathedral on Portuguese Church Street. A great civic reception was held the next day, where they were welcomed by the Ladies of the Nun Committee, a large gathering of the people of Calcutta and Bishop Carew, and they were installed at the house in Middleton Row.
                                </div>
                                <br/>
                                <center>
                                    <a
                                        href="services.html"
                                        className="btn btn-dark text-capitalize position-relative border-0 p-0 mt-4 mt-sm-0 mb-sm-1 minWidthMedium"
                                        data-hover="Read More"
                                    >
                                        <span className="d-block btnText">Read More</span>
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
