import React, { useState } from "react";
// import "./AngularJs.css";
import Slider from "react-slick";
import Sliders from '../../../assets/images/slide.png'
import Sliderone from '../../../assets/images/slide_one.png'
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import StarRatingComponent from "react-star-rating-component";

AOS.init();

export const Practice = () => {

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    };
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    
    const [rating, setRating] = useState(0);
    const onStarClick = (nextValue) => {
        setRating(nextValue);
    };

    return (
        <section >
            <div className="container mt-5 mb-5 mx-4">
                <h1
                    className="angular-heading"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Testimonial
                </h1>
                <p className="angular-para">
                    A testimonial is an honest endorsement or review from a customer
                    describing how a product or service met their expectations or resolved
                    their problems.
                </p>
            </div>
            <div className="container mx-4">
                <div className="row">
                    <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12">
                        <Slider {...settings}>
                            <div className="container px-4">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 px-5 angular_side">
                                        <h4 className="underpara mt-3">Jonh Almeda</h4>
                                        <div className="container">
                                            <div style={{ display: "flex" }}>
                                                
                                                <span>(5.0)</span>
                                            </div>
                                        </div>
                                        <p className="underpara">
                                            Proin sed libero enim sed faucibus turpis. At imperdiet
                                            dui accumsan sit amet nulla facilisi morbi tempus. Ut sem
                                            nulla pharetra diam sit amet nisl.
                                        </p>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 angular-img">
                                        <img
                                            src={Sliders}
                                            className="img-fluid rounded-circle"
                                            alt="switch"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="container  mb-5">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 px-5 angular_side">
                                        <h4 className="underpara mt-3">Abhishek Gupta</h4>
                                        <div className="container">
                                            <div style={{ display: "flex" }}>
                                                
                                                <span>(3.0)</span>
                                            </div>
                                        </div>
                                        <p className="underpara">
                                            Proin sed libero enim sed faucibus turpis. At imperdiet
                                            dui accumsan sit amet nulla facilisi morbi tempus. Ut sem
                                            nulla pharetra diam sit amet nisl.
                                        </p>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 angular-img">
                                        <img
                                            src={Sliderone}
                                            className="img-fluid rounded-circle"
                                            alt="switch"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};