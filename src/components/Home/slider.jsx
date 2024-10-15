import React from 'react';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../assets/slideBanner1.jpg';
import slide2 from '../assets/slideBanner2.jpg';
// Import additional slides if available
// import slide2 from '../assets/slideBanner2.jpg';

function Slider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const photos = [
        { src: slide1, alt: 'Slide 1' },
        { src : slide2, alt : 'Slide 2'},
        // Add more slides here if needed
        // { src: slide2, alt: 'Slide 2' },
    ];

    return (
        <div className="relative w-full overflow-hidden">
            <SlickSlider {...settings} className="w-full">
                {photos.map((photo, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img src={photo.src} alt={photo.alt} className="w-full objerct-cove" />
                    </div>
                ))}
            </SlickSlider>
        </div>
    );
}

export default Slider;
