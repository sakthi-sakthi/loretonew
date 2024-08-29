import React from 'react'

const Footer = () => {
    return (
        <>
            <aside className="footerAside pt-9 pb-sm-2 pt-xl-14 pb-xl-12 mt-5" style={{ backgroundColor: 'rgb(1 44 109)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='section-headings'>
                                <h3 className="ftHeading text-white mb-4">History</h3>
                            </div>
                            <div className='d-flex mt-5'>
                                <a href="/">
                                    <img
                                        className="footer-logo"
                                        src="https://loreto.in/assets/images/home/logo.png"
                                        alt="footer logo"
                                        style={{ height: '100px', width: '30rem' }}
                                    />
                                </a>
                                &nbsp;<p className='text-white text-justify'>
                                    We are a community of religious women, belonging to the Institute of the Blessed Virgin Mary a multicultural , International
                                </p>
                            </div>
                            <p className='text-white text-justify'>
                                Institute founded by an English woman, Mary Ward.  We are known informally as Loreto Sisters. The IBVM comprised of three branches:
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="pl-xlwd-11">
                                <div className='section-headings'>
                                    <h3 className="ftHeading text-white mb-4">Contact Us</h3>
                                </div>
                                <ul className="list-unstyled ftsrLinksList mb-0 text-white">
                                    <li>
                                        <p className="text-white">
                                            <span className="theme-clr">
                                                <i className="fa fa-map-marker" aria-hidden="true" />
                                            </span>
                                            &nbsp;&nbsp;7 Middleton Row, Kolkata, India - 700071
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-white">
                                            <span className="theme-clr">
                                                <i className="fa fa-phone" aria-hidden="true" />
                                            </span>
                                            &nbsp;&nbsp;033-4006 1156
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-white">
                                            <span className="theme-clr">
                                                <i className="fa fa-envelope" aria-hidden="true" />
                                            </span>
                                            &nbsp;&nbsp;provsecsa@loreto.in
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="pl-xlwd-11">
                                <div className='section-headings'>
                                    <h3 className="ftHeading text-white mb-4">Our Location</h3>
                                </div>
                                <ul className="list-unstyled ftsrLinksList mb-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7730007234613!2d88.34968917593255!3d22.550174633790775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771079019917%3A0x936dfcbc761465b5!2s7%2C%20Sir%20William%20Jones%20Sarani%2C%20Park%20Street%20area%2C%20Kolkata%2C%20West%20Bengal%20700071!5e0!3m2!1sen!2sin!4v1710998858380!5m2!1sen!2sin"
                                        style={{ border: 0, height: '150px', width: "300px" }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title='loreto'
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <footer
                id="pageFooter"
                className="text-center bg-dark pt-6 pb-3 pt-md-8 pb-md-5"
            >
                <div className="container">
                    <p className='text-white'>
                        <a href="home.html">© Copyright 2024 BoscoSoft Technologies</a>
                        <br className="d-md-none" />
                        &nbsp;All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
