import React, { useEffect } from 'react';
import { ReligioUrl } from '../Api/ApiUrl';
import axios from 'axios';

const UpcomingEvents = () => {
    const [latestEvents, setLatestEvents] = React.useState([]);

    useEffect(() => {
        axios
            .get(`${ReligioUrl}/news/province/1`)
            .then((response) => {
                const sortedData = response?.data?.data
                    .sort((a, b) => b?.id - a?.id)
                    .slice(0, 3);

                setLatestEvents(sortedData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="upcomeventsBlock position-relative pt-7 pb-3 pt-md-9 pb-md-6 pt-lg-14 pb-lg-11 pt-xl-20 pb-xl-16">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pr-lg-8">
                            <header className="headingHead cdTitle mb-7 mb-md-13">
                                <h2 className="fwSemiBold mb-4">Latest News</h2>
                            </header>
                            {latestEvents?.length === 0 && (
                                <div className="row">
                                    <div className="col-12">
                                        <p><b>No News Available</b></p>
                                    </div>
                                </div>
                            )}
                            <div className="row">
                                {latestEvents?.map((event) => (
                                    <div className="col-12 col-md-4" key={event?.id}>
                                        <article className="ueEveColumn position-relative shadow bg-white" style={{ height: "370px" }}>
                                            <div className="imgHolder position-relative">
                                                <a href="/">
                                                    <img
                                                        src={event?.upload_image[0] || 'assets/images/home/noimage.jpg'}
                                                        className="img-fluid d-block w-100"
                                                        alt={event?.name}
                                                    />
                                                </a>
                                                <time
                                                    className="ueTimeTag position-absolute text-center d-flex bg-white fontAlter fwSemiBold text-lDark text-uppercase"
                                                    dateTime={event?.date}>
                                                    <span className="d-block text-white textDay flex-shrink-0 font-weight-bold">
                                                        {new Date(event?.date).getDate()}
                                                    </span>
                                                    <span className="d-block py-2 px-3">
                                                        {new Date(event?.date).toLocaleString('default', { month: 'short' })} {new Date(event?.date).getFullYear()}
                                                    </span>
                                                </time>
                                            </div>
                                            <div className="ueDescriptionWrap pt-5 pb-8 px-5">
                                                <h3 className="h3Small fwMedium">
                                                    <a href="/">{event?.name}</a>
                                                </h3>
                                                <button className="btn btn-primary btn-sm">View More</button>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
