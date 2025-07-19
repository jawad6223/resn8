import React, {useState, useEffect} from 'react'
import './Browse.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image_one from '../../../assets/images/Img_one.png'
import Image_two from '../../../assets/images/Img_two.png'
import Image_three from '../../../assets/images/Img_three.png'
import Image_four from '../../../assets/images/Img_four.png'
import Image_five from '../../../assets/images/Img_five.png'
import Image_six from '../../../assets/images/Img_six.png'
import Image_seven from '../../../assets/images/Img_seven.png'

export const Browse = () => {

    useEffect(() => {
        AOS.init({
          offset: 300,
          duration: 1000,
        });
      }, []); // Run this effect only once when the component mounts

    const data = [
        { image: Image_one, text: "Calming" },
        { image: Image_two, text: "Corporate" },
        { image: Image_three, text: "Energetic" },
        { image: Image_four, text: "Dramatic" },
        { image: Image_five, text: "Sultry" },
        { image: Image_six, text: "Friendly" },
        { image: Image_seven, text: "Whimsical" },
        { btn: <button className='explore_btn'>Explore Now</button> }
    ];

    return (
        <>
            <div className="container-fluid browse_bg pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-4 col-sm-5 col-12" data-aos="fade-up">
                            <p className='browse_name'>Browse Voices by <br /> Tone</p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-8 col-sm-7 col-12" data-aos="fade-down">
                            <p className='explore_name'>
                                Explore a vast array of voices, each carefully curated to strike
                                the perfect tone that resonates seamlessly with your diverse audiences.
                                With our extensive database, you can search through hundreds of voices,
                                each uniquely crafted to capture the essence of your message.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        {data.map((item, index) => {
                            return (
                                index == data.length - 1 ? (
                                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 d-flex justify-content-center align-item-center ho" style={{ marginTop: "130px" }} key={index} data-aos="fade-down">
                                        {item.btn}
                                    </div>
                                )
                                    : (
                                        (
                                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 mt-4" key={index} data-aos="fade-down">
                                                <div className="card ho">
                                                    <img src={item.image} className="card-img-top" alt="..." />
                                                    <div className="card-body claming_box">
                                                        <p className="card-title claming_name">{item.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )))
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}