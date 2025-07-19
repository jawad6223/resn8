import React, {useState, useEffect} from 'react'
import './Trending.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rectangle_one from '../../../assets/images/Rectangle_one.png'
import Rectangle_two from '../../../assets/images/Rectangle_two.png'
import Rectangle_three from '../../../assets/images/Rectangle_three.png'
import Rectangle_four from '../../../assets/images/Rectangle_four.png'
import Rectangle_five from '../../../assets/images/Rectangle_five.png'
import { icons } from '../../../Constant/Icons/Icons'

export const Trending = () => {

    useEffect(() => {
        AOS.init({
          offset: 300,
          duration: 1000,
        });
      }, []); // Run this effect only once when the component mounts

    const data = [
        { image: Rectangle_one, title: "Narration", des: "Discover voices with a range of narrative techniques." },
        { image: Rectangle_two, title: "Character Voices", des: "Delve into the artistry of character voices, where each tone, inflection, and nuance breathes life into fictional personas, adding depth and authenticity to the narrative tapestry." },
        { image: Rectangle_three, title: "Commercial", des: "Bring products, brands, and ideas to life with compelling and memorable impact." },
        { image: Rectangle_four, title: "IVR/Phone Systems", des: "Browse voices that enhance user experiences across a spectrum of industries." },
        { image: Rectangle_five, title: "Animation Dubbing", des: "Explore the world of animation dubbing, where voices infuse characters with personality, transcending language to convey emotion, humor, and storytelling magic." },
    ]

    return (
        <section>
            <div className="container-fluid pt-5 pb-5 bg_landing">
                <div className="container">
                    <div className="row">
                        <div className="col" data-aos="fade-down">
                            <div className='trending_styling'>
                                Trending Categories
                            </div>
                        </div>
                        <div className="col d-flex justify-content-end pt-3" data-aos="fade-up">
                            <div className='view_styling'>
                                View All
                                {icons.RightarrowIcon}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5" >
                        {data.map((item, index) => (
                            <div className={`${index === 1 ? 'col-md-8' : 'col-md-4'} p-2`} key={index} style={{position: "relative"}} data-aos="fade-down">
                                <img src={item.image} alt="" style={{width:'100%'}}/>
                                <div className={`${index === 1 ? 'card_image2' : 'card_image'}`} style={{color: "white"}}>
                                    <p className='trending_title'> {item.title}</p>
                                    <p className='trending_des'> {item.des}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}