import React, { useEffect } from 'react';
import './css/Count.css'

const animateValue = (start, end, duration, element) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const Counts = () => {
    useEffect(() => {
        const counts = document.querySelectorAll('.dataCount');
        counts.forEach((count) => {
            const endValue = parseInt(count.getAttribute('data-end'), 10);
            animateValue(0, endValue, 2000, count);
        });
    }, []);

    return (
        <aside className="counterftAsideBlock position-relative text-center text-white d-flex bg-dark">
            <div className="alignHolder d-flex align-items-center w-100 position-relative">
                <div className="align w-100 pt-9 pb-5">
                    <div className="container">
                        <ul className="list-unstyled cfbFeatList d-flex flex-wrap mb-0 justify-content-center">
                            <li>
                                <span className="icnWrap d-flex align-items-center justify-content-center w-100 mb-4">
                                    <i className="fa fa-users">
                                        <span className="sr-only">icon</span>
                                    </i>
                                </span>
                                <h3 className="fwSemiBold text-white textCount mb-3">
                                    <span className="dataCount" data-end="130">0</span>+
                                </h3>
                                <h4 className="subtitle mb-0 font-weight-normal">Members</h4>
                            </li>
                            <li>
                                <span className="icnWrap d-flex align-items-center justify-content-center w-100 mb-4">
                                    <i className="fa fa-home">
                                        <span className="sr-only">icon</span>
                                    </i>
                                </span>
                                <h3 className="fwSemiBold text-white textCount mb-3">
                                    <span className="dataCount" data-end="31">0</span>+
                                </h3>
                                <h4 className="subtitle mb-0 font-weight-normal">Communities</h4>
                            </li>
                            <li>
                                <span className="icnWrap d-flex align-items-center justify-content-center w-100 mb-4">
                                    <i className="fa fa-female">
                                        <span className="sr-only">icon</span>
                                    </i>
                                </span>
                                <h3 className="fwSemiBold text-white textCount mb-3">
                                    <span className="dataCount" data-end="106">0</span>+
                                </h3>
                                <h4 className="subtitle mb-0 font-weight-normal">Sisters</h4>
                            </li>
                            <li>
                                <span className="icnWrap d-flex align-items-center justify-content-center w-100 mb-4">
                                    <i className="fa fa-university">
                                        <span className="sr-only">icon</span>
                                    </i>
                                </span>
                                <h3 className="fwSemiBold text-white textCount mb-3">
                                    <span className="dataCount" data-end="30">0</span>+
                                </h3>
                                <h4 className="subtitle mb-0 font-weight-normal">Institutions</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <span
                className="cfbBgWrap bgCover position-absolute h-100 w-100 inaccessible"
                style={{ backgroundImage: "url(images/bg01.png)" }}
            />
        </aside>
    );
};

export default Counts;
