import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Slider.css';

const Slider = () => {
    return (
        <Carousel
            showThumbs={false}
            showStatus={true}
            showIndicators={true}
            infiniteLoop={true}
            // autoPlay={true}
            interval={5000}
            stopOnHover={true}
            transitionTime={2000}
            swipeable={true}
            showArrows={true}
            className="carousel"
        >
            <div>
                <img src="https://cms.loreto.in/slideimages/slide2.jpg" alt="2" />
            </div>
            <div>
                <img src="https://cms.loreto.in/slideimages/slide1.jpg" alt="1" />
            </div>
            <div>
                <img src="https://cms.loreto.in/slideimages/slide3.jpg" alt="3" />
            </div>
        </Carousel>
    );
};

export default Slider;