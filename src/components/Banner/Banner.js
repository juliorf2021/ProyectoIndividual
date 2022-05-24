import React from "react";
import './Banner.css';
import Slider from "react-slick";
import banner from "../../images/Blue and White Circle Corporate Clean Vaccine Scheduling General Health Banner.png"
import banner1 from "../../images/Blue2.png"
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };
    return (
        <div className='slider-custom'>
            <div className='overlay'>
                <div className='banner-contenet'>
                    <h3>Empieza a cuidar tu salud desde hoy</h3>
                    <p>Los mejores programas de salud para cuidar de ti y los tuyos.</p>
                    
                </div>
            </div>
            <Slider {...settings}>
                <div class="carousel-item">
                    <img src={banner} alt="" className='img-fluid' />
                    <div class="carousel-caption d-none d-md-block">

                    </div>
                </div>
                <div class="carousel-item">
                    <img src={banner1} alt="" className='img-fluid' />
                    <div class="carousel-caption d-none d-md-block">

                    </div>
                </div>
                <div class="carousel-item">
                    <img src={banner} alt="" className='img-fluid' />
                    <div class="carousel-caption d-none d-md-block">

                    </div>
                </div>

            </Slider>
        </div>

    );
};

export default Banner;