import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Slider.css';

const Slider = ({ sliderdata }) => {
    return (
        <Carousel
            showThumbs={false}
            showStatus={true}
            showIndicators={true}
            infiniteLoop={true}
            interval={5000}
            stopOnHover={true}
            transitionTime={3000}
            swipeable={true}
            showArrows={true}
            emulateTouch={true}
            className="carousel"
        >
            {sliderdata?.map((item, index) => (
                <div key={index}>
                    <img src={item?.image} alt={item?.title || `Slide ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default Slider;
