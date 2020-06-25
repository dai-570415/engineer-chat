import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Mainback1 from '../../assets/img/mainback_1.jpg';
import Mainback2 from '../../assets/img/mainback_2.jpg';
import Mainback3 from '../../assets/img/mainback_3.jpg';

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Slide = () => {
    return (
        <div className="main">
            <Slider {...settings}>
                <img src={Mainback1} className="main-img" alt="イメージ"/>
                <img src={Mainback2} className="main-img" alt="イメージ"/>
                <img src={Mainback3} className="main-img" alt="イメージ"/>
            </Slider>
            <style jsx>{`
                .main {
                    width: 60%;
                    position: fixed;
                    z-index: -1;
                }
                .main .main-img {
                    width: 100%;
                    height: 100vh;
                    object-fit: cover;
                    vertical-align: bottom;
                }
            `}</style>
        </div>
    );
}

export default Slide;