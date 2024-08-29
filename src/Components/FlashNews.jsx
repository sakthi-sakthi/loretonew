import React from 'react'

const FlashNews = () => {
    return (
        <>
            <div className="hdTopBar py-2 py-xl-3 bg-dark d-none d-md-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="topNews d-flex align-items-center overflow-hidden">
                                <span>Flash News</span>
                                <div className="cityNewsSlider w-100">
                                    <div className='text-white'>
                                         {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                                        <marquee style={{marginTop:"10px"}}>
                                            <i className="icn fa fa-star" aria-hidden="true" /> WELCOME TO INSTITUTE OF BLESSED VIRIGIN MARY <i className="icn fa fa-star" aria-hidden="true" />
                                        </marquee>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashNews