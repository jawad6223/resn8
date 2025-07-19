import React, { useState, useEffect } from 'react'
import './Find.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from '../../../assets/images/img.png'
import Sliders from '../../../assets/images/slide.png'
import SliderOne from '../../../assets/images/slide_one.png'
import SliderTwo from '../../../assets/images/slide_two.png'
import Line from '../../../assets/images/Line.png'
import Mike from '../../../assets/images/mike.png'
import People from '../../../assets/images/People_group.png'

export const Find = () => {

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []); // Run this effect only once when the component mounts

    const settings = {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1400, // XL
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200, // LG
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992, // MD
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, // SM
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576, // XS
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480, // XS
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const sliderData = [
        {
            id: 1,
            heading: '01',
            content: 'Bowens Higgins',
            completedOrders: 500,
            image: Sliders,
        },
        {
            id: 2,
            heading: '02',
            content: 'Leighton Kramer',
            completedOrders: 350,
            image: SliderTwo,
        },
        {
            id: 3,
            heading: '03',
            content: 'Saige Fuentes',
            completedOrders: 700,
            image: SliderOne,
        },
        {
            id: 4,
            heading: '04',
            content: 'Rockfest today',
            subContent: '#Music Podcast',
            image: Sliders,
        },
    ];

    const SliderComponent = ({ data }) => (
        <Slider {...settings}>
            {data.map((item) => (
                <div className='slider_div' key={item.id}>
                    <div className='d-flex gap-5'>
                        <div>
                            <div className='slider_heading'>{item.heading}</div>
                            <div className='slider_content'>{item.content}</div>
                            <div className='slider_style_content pt-2'>
                                Completed Orders <span style={{ color: "#D0126C" }}>{item.completedOrders}</span>
                            </div>
                        </div>
                        <div>
                            <img src={item.image} alt="" style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );

    return (
        <>
            <div className="container-fluid pt-5 pb-5 bg_landing p-0 position-relative">
                <div className='position-absolute mike_style'>
                <img src={Mike} alt="" className='mike_img' />
                </div>
                <div className="container">
                    <div className="row" data-aos="fade-down">
                        <div className="col">
                            <div className="d-flex justify-content-end">
                                <div className='trending_name'>Trending Voices</div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <div className='borders pt-4'></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4" data-aos="fade-down">
                        <div className="col">
                        <SliderComponent data={sliderData} />
                        </div>
                        <div className="col pt-4">
                            <img src={Line} alt="" style={{ width: "100%" }} />
                        </div>
                    </div >
                    <div className="row mt-5">
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 ho" data-aos="fade-up">
                            <img src={Image} alt="" style={{ width: "95%" }} />
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12" data-aos="fade-down">
                            <div className='contet_text_style'>
                                <div className='hire_name'>Find & Hire Your Favorite Voice Talent</div>
                                <div className='search_name'>Search our extensive database of real talent, with real voices that resonate with your diverse audience.</div>
                                <div className="row mt-4">
                                    <div className="col-3">
                                        <img src={People} alt="" style={{ width: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        <p className='voice_name mb-0 pt-2'>100+ Voices <span style={{ color: "pink" }}>Learn More</span> </p>
                                    </div>
                                </div>
                                <div>
                                    <button className='find_btn mt-4'>
                                        Find Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}