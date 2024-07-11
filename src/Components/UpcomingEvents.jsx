import React from 'react'

const UpcomingEvents = () => {
    return (
        <>
            <section className="upcomeventsBlock position-relative pt-7 pb-3 pt-md-9 pb-md-6 pt-lg-14 pb-lg-11 pt-xl-20 pb-xl-16">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pr-lg-8">
                                <header className="headingHead cdTitle mb-7 mb-md-13">
                                    <h2 className="fwSemiBold mb-4">Latest News</h2>
                                </header>
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <article className="ueEveColumn position-relative shadow bg-white mb-6">
                                            <div className="imgHolder position-relative">
                                                <a href="/">
                                                    <img
                                                        src="images/3.jpg"
                                                        className="img-fluid d-block w-100"
                                                        alt="No Data"
                                                    />
                                                </a>
                                                <time
                                                    className="ueTimeTag position-absolute text-center d-flex bg-white fontAlter fwSemiBold text-lDark text-uppercase"
                                                    dateTime="2011-01-12"
                                                >
                                                    <span className="d-block text-white textDay flex-shrink-0 font-weight-bold">
                                                        01
                                                    </span>
                                                    <span className="d-block py-2 px-3">AUG 2024</span>
                                                </time>
                                            </div>
                                            <div className="ueDescriptionWrap pt-5 pb-8 px-5">
                                                <strong className="d-block ueCatTitle fwSemiBold text-secondary mb-2">
                                                    Latest News
                                                </strong>
                                                <h3 className="h3Small fwMedium mb-3">
                                                    <a href="/">
                                                        Loreto Sisters Cultural Festival
                                                    </a>
                                                </h3>
                                                <p className="ueDate mb-0">
                                                    Loreto Sisters Cultural Festival is an annual cultural fest organized by Loreto in India.
                                                </p>
                                                <a
                                                    href="/"
                                                    className="btn btnCustomLightOutline bdrWidthAlter btn-sm text-capitalize position-relative border-0 p-0 mt-3 align-top"
                                                    data-hover="More Details"
                                                >
                                                    <span className="d-block btnText">More Details</span>
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <article className="ueEveColumn position-relative shadow bg-white mb-6">
                                            <div className="imgHolder position-relative">
                                                <a href="/">
                                                    <img
                                                        src="https://cms.loreto.in/storage/6/65fc053f3d39c_Photo_4557122.jpg"
                                                        className="img-fluid d-block w-100"
                                                        alt="No Data"
                                                    />
                                                </a>
                                                <time
                                                    className="ueTimeTag position-absolute text-center d-flex bg-white fontAlter fwSemiBold text-lDark text-uppercase"
                                                    dateTime="2011-01-12"
                                                >
                                                    <span className="d-block text-white textDay flex-shrink-0 font-weight-bold">
                                                        15
                                                    </span>
                                                    <span className="d-block py-2 px-3">SEP 2024</span>
                                                </time>
                                            </div>
                                            <div className="ueDescriptionWrap pt-5 pb-8 px-5">
                                                <strong className="d-block ueCatTitle fwSemiBold text-secondary mb-2">
                                                    Upcoming Event
                                                </strong>
                                                <h3 className="h3Small fwMedium mb-3">
                                                    <a href="/">
                                                        Loreto Sisters Meetings
                                                    </a>
                                                </h3>
                                                <p className="ueDate mb-0">
                                                    Loreto Sisters Meetings starts on 15 Sep 2024 at domanion in domanion city.
                                                </p>
                                                <a
                                                    href="/"
                                                    className="btn btnCustomLightOutline bdrWidthAlter btn-sm text-capitalize position-relative border-0 p-0 mt-3 align-top"
                                                    data-hover="More Details"
                                                >
                                                    <span className="d-block btnText">More Details</span>
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <article className="ueEveColumn position-relative shadow bg-white mb-6">
                                            <div className="imgHolder position-relative">
                                                <a href="/">
                                                    <img
                                                        src="images/8.jpg"
                                                        className="img-fluid d-block w-100"
                                                        alt="No Data"
                                                    />
                                                </a>
                                                <time
                                                    className="ueTimeTag position-absolute text-center d-flex bg-white fontAlter fwSemiBold text-lDark text-uppercase"
                                                    dateTime="2011-01-12"
                                                >
                                                    <span className="d-block text-white textDay flex-shrink-0 font-weight-bold">
                                                        01
                                                    </span>
                                                    <span className="d-block py-2 px-3">OCT 2024</span>
                                                </time>
                                            </div>
                                            <div className="ueDescriptionWrap pt-5 pb-8 px-5">
                                                <strong className="d-block ueCatTitle fwSemiBold text-secondary mb-2">
                                                    Latest News
                                                </strong>
                                                <h3 className="h3Small fwMedium mb-3">
                                                    <a href="/">
                                                        Loreto Sisters Monthly Retreat
                                                    </a>
                                                </h3>
                                                <p className="ueDate mb-0">
                                                    Loreto Sisters Monthly Retreat starts on 01 Oct 2024 at domanion in domanion city.
                                                </p>
                                                <a
                                                    href="/"
                                                    className="btn btnCustomLightOutline bdrWidthAlter btn-sm text-capitalize position-relative border-0 p-0 mt-3 align-top"
                                                    data-hover="More Details"
                                                >
                                                    <span className="d-block btnText">More Details</span>
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpcomingEvents
