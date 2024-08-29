import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import './css/Card.css';

const Newsletter = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://app.loreto.in/api/newsletter/province/1`);
                setData(response?.data?.data?.slice(0, 3));
                setLoading(false);
            } catch (error) {
                console.log('Error fetching Data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) {
        return <div><p><b><center>Loading...</center></b></p></div>
    }

    if (!data) {
        return <div><p><b><center>No data available.</center></b></p></div>
    }

    return (
        <>
            <section className="newsPulicationsBlock position-relative bg-light overflow-hidden pt-7 pb-4 pt-md-10 pb-md-4 pt-lg-16 pb-lg-10 pt-xl-22 pb-xl-16">
                <div className="container position-relative npbHolder">
                    <header className="headingHead cdTitle mb-7 mb-md-13">
                        <h2 className="fwSemiBold mb-4">Monthly Newsletter</h2>
                    </header>
                    <div className='row'>
                        {data?.map((item, index) => (
                            <div key={index} className='col-lg-4'>
                                <div className="drDocColumn position-relative bg-white shadow px-7 pt-7 pb-6 mb-6">
                                    <div className="d-flex mb-3">
                                        <span className="icnWrap flex-shrink-0 pt-1 mr-3">
                                            <img
                                                src="images/document.png"
                                                className="img-fluid"
                                                alt="icon"
                                                style={{ height: '50px' }}
                                            />
                                        </span>
                                        <div className="descrWrap">
                                            <h2 className="fwSemiBold">
                                                <a href={item?.upload} download>{item?.name}</a>
                                            </h2>
                                            <strong className="d-block fileSize font-weight-normal">
                                                {moment(item.month, 'MM').format('MMMM')} - {item?.year}
                                            </strong>
                                        </div>
                                        <span className="ml-auto">
                                            <a href={item?.upload} download>
                                                <img src='images/df.webp' style={{ height: '60px' }} alt="nodata"></img>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <a
                                            href={item?.upload}
                                            className="btn btn-outline-light btnAlterDark btnNoOver btn-sm mr-2"
                                            target='_blank'
                                            rel="noreferrer"
                                        >
                                            <i className='fa fa-eye'></i>
                                        </a>
                                        <a
                                            href={item?.upload}
                                            className="btn btn-outline-light btnAlterDark btnNoOver btn-sm mr-2"
                                            download
                                        >
                                            <i className='fa fa-download'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <span
                    className="npbBgPattern w-100 h-100 bgCover position-absolute inaccessible"
                    style={{ backgroundImage: "url(images/bgPattern2.jpg)" }}
                />
            </section>
        </>
    );
}

export default Newsletter;