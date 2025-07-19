import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import WaveSurfer from "wavesurfer.js";
import AudioFile from "../../../assets/images/wakeup.mp3";
import './Capture.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vector from '../../../assets/images/Vector.png'
import Play from '../../../assets/images/Play.png'
import Dots from '../../../assets/images/Dots.png'
import Sound from '../../../assets/images/Animation.png'
import Vec from '../../../assets/images/Vector1.png'
import Brand from '../../../assets/images/logo.png'
import wave from '../../../assets/images/wavesurfer.gif'
import { icons } from '../../../Constant/Icons/Icons'

export const Capture = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []); // Run this effect only once when the component mounts

    // // Array of objects representing icon components and associated text
    const iconsData = [
        { icon: <div className='micro_logo_style pt-4'>{icons.MicrosoftIcon}</div>, text: 'Microsoft' },
        { icon: <div className='micro_logo_style pt-4'>{icons.AirbndIcon}</div>, text: 'Airbnb' },
        { icon: <div className='micro_logo_style pt-4'>{icons.GodaddyIcon}</div>, text: 'GoDaddy' },
        { icon: <img src={Brand} alt="" style={{ width: "100px" }} /> }
    ];

    // useEffect(() => {
    //     // Create the WaveSurfer instance once, outside of this effect
    //     const wavesurfer = WaveSurfer.create({
    //         container: "#waveform",
    //         waveColor: "#0F0536",
    //         progressColor: "#EA1179",
    //         height: 50,
    //         responsive: true,
    //         cursorColor: "#5DF9DE",
    //     });

    //     // Load your audio file
    //     wavesurfer.load(AudioFile);

    //     // Handle play button click
    //     const playBtn = document.getElementById("playBtn");
    //     playBtn.onclick = function () {
    //         wavesurfer.playPause();
    //         // Toggle a class to handle styling instead of changing the src
    //         playBtn.classList.toggle("playing");
    //     };

    //     // Clean up the WaveSurfer instance when the component unmounts
    //     return () => {
    //         wavesurfer.destroy();
    //     };
    // }, []); // Empty dependency array to run this effect once after rendering

    const handleButtonClick = () => {
        const playBtn = document.getElementById("playBtn");

        // Toggle the play/pause state
        setIsPlaying(!isPlaying);

        // Add or remove the 'playing' class based on the play state
        if (!isPlaying) {
            playBtn.classList.add('playing');
        } else {
            playBtn.classList.remove('playing');
        }

        // Add your play/pause logic here
    };

    return (
        <>
            <section id='capture'>
                <div className="container-fluid bg_landing">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                                <div className='landing_heading'>
                                    Find The Right Voice For Your Target Audience
                                </div>
                                <div className='dots_styling'>
                                    <img src={Dots} alt="" />
                                </div>
                                <div className='d-flex pt-4'>
                                    <div style={{ width: "75%" }}>
                                        <form action="">
                                            <input type="text" placeholder="I’m looking for..." className='input_styling' />
                                        </form>
                                    </div>
                                    <div style={{ width: "20%" }}>
                                        <button className='search_btn'>
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <span className='comment_styling'>Ex: I'm looking for a cheerful, adult male voice, with a southern accent...</span>
                                <p className='trusted_styling pt-4 m-0'>Trusted by</p>
                                <div className="d-flex flex-wrap gap-4">
                                    {iconsData.map((item, index) => (
                                        <div className='ho' key={index}>
                                            {item.icon}
                                            <span className='micro_styling'>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 hero" data-aos="fade-down">
                                <div className='position-relative ho'>
                                    <div className='rectangle_style'>
                                        <img src={Sound} alt="" className='heart_img' />
                                    </div>
                                    <div className='position-relative text-center'>
                                        <LazyLoadImage
                                            src={Vector}
                                            className='vector_img' />
                                        <img src={Vec} alt="" className='vectors_o_img' />
                                        <div className='img_position'>
                                            <div className={`play_btn`} id="playBtn" onClick={handleButtonClick}>
                                                {isPlaying ? icons.Pausebtnicon : icons.Playbtnicon}
                                            </div>
                                            <span className='play_name pt-1'>How it works?</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={wave} alt="" style={{width: "100%", height: "130px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}