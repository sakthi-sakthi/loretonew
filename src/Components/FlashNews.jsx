import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { ReligioUrl } from '../Api/ApiUrl';
import { Link } from 'react-router-dom';

const FlashNews = () => {
    const [latestNews, setLatestNews] = useState({});
    const marqueeRef = useRef(null);

    useEffect(() => {
        const fetchLatestNews = async () => {
            try {
                const response = await axios.get(`${ReligioUrl}/news/province/1`);
                const newsData = response?.data?.data;

                if (newsData?.length > 0) {
                    const latestItem = newsData.sort((a, b) => b.id - a.id)[0];
                    setLatestNews(latestItem || { name: 'No news available' });
                }
            } catch (error) {
                console.log('Error fetching data:', error);
                setLatestNews({ name: 'Error fetching news' });
            }
        };

        fetchLatestNews();
    }, []);

    const handleMouseOver = () => {
        if (marqueeRef.current) {
            marqueeRef.current.stop();
        }
    };

    const handleMouseOut = () => {
        if (marqueeRef.current) {
            marqueeRef.current.start();
        }
    };

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
                                        {latestNews && latestNews.id && (
                                            <Link to={`/all-upcome-news?newsid=${encodeURIComponent(
                                                btoa(latestNews.id)
                                            )}`} className='text-white'>
                                                {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                                                <marquee
                                                    ref={marqueeRef}
                                                    style={{ marginTop: "10px" }}
                                                    onMouseOver={handleMouseOver}
                                                    onMouseOut={handleMouseOut}
                                                >
                                                    <i className="icn fa fa-star" aria-hidden="true" /> {latestNews.name} <i className="icn fa fa-star" aria-hidden="true" />
                                                </marquee>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlashNews;
