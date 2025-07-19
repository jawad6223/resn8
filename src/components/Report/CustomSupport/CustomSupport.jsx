import React, { useState } from 'react'
import './CustomSupport.css'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { CiFaceSmile } from "react-icons/ci";
import { IoIosAttach } from "react-icons/io";
import { GiElectric } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import Message from '../../../assets/images/chat.png'
import Messageone from '../../../assets/images/chat_one.png'
import Messagetwo from '../../../assets/images/chat_two.png'
import Messagethree from '../../../assets/images/chat_three.png'
import Messagefour from '../../../assets/images/chat_four.png'
import { IoReorderThreeOutline } from "react-icons/io5";
import { Toggle } from './Toggle';



export const CustomSupport = () => {

    const Users = () => (
        <div className='d-flex mt-3 gap-4'>
            <div className='position-relative'>
                <img src={Message} alt="" />
                <div className='online_circle'></div>
            </div>
            <div className='d-flex flex-column'>
                <div className='person_style'>
                    Jason Susanto
                </div>
                <div className='tag_style' style={{ color: "#FFFFFF5E" }}>
                    <IoCheckmarkDoneOutline className='tick_icon' /> Image Sent
                </div>
            </div>
            <div className='time_style mt-1'>
                10.42 AM
            </div>
        </div>
    )

    const Usersmess = () => (
        <div className='d-flex mt-4 gap-4'>
            <div className='position-relative'>
                <img src={Messageone} alt="" />
                <div className='online_circle' style={{ background: "yellow" }}></div>
            </div>
            <div className='d-flex flex-column'>
                <div className='person_style'>
                    JJ Jinggg
                </div>
                <div className='tag_style'>
                    Nice clutch vs Fnatic 👍
                </div>
            </div>
            <div className='d-flex flex-column'>
                <div className='time_style mt-1'>
                    9.42 AM
                </div>
                <div className='d-flex justify-content-end'>
                    <div className='no_circle_style'>
                        2
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <section>
            <div className="container-fluid dashboard_bg custom_support pb-3">
                <div className="container pt-4">
                <div className="row">
                        <div className="col-xxl-9 col-xl-9 col-lg-11 col-md-11 col-sm-11 col-10">
                        <div className='find_browse_style'>
                                Chat
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-1 col-md-1 col-sm-1 col-2">
                                <button className="d-xxl-none d-xl-none d-lg-block d-md-block d-sm-block d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ border: "none", background: "none" }}>
                                    <IoReorderThreeOutline style={{ color: "white", fontSize: "30px" }} />
                                </button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-xxl-9 col-xl-9 col-lg-12">
                            <div className='chat_box pb-2'>
                                <div className='d-flex ps-4 pt-2 gap-2'>
                                    <div>
                                    <img src={Message} alt="" />
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <div className='user_name_style'>
                                            Jason Susanto
                                        </div>
                                        <div className='tag_style'>
                                            Typing...
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='chatting_box pb-4'>
                                <div className='ps-4 pe-4 pt-4'>
                                    <div className='mess_style ps-3 pe-2 pt-2 pb-2' style={{ width: "17%" }}>
                                        Hahaha, lol 🤣
                                    </div>
                                    <div className='mess_style ps-3 pe-2 pt-2 pb-2 mt-3' style={{ width: "36%" }}>
                                        Ron, when you’ll book a plane ticket?
                                    </div>
                                    <div className='time_style mt-2'>
                                        09.27 PM
                                    </div>
                                    <div className='mt-4 d-flex justify-content-end'>
                                        <div className='reply_style ps-3 pe-2 pt-2 pb-2' style={{ width: "19%" }}>
                                            Maybe tomorrow
                                        </div>
                                    </div>
                                    <div className='mt-3 d-flex justify-content-end'>
                                        <div className='reply_style ps-3 pe-2 pt-2 pb-2' style={{ width: "23%" }}>
                                            After we go back to SG
                                        </div>
                                    </div>
                                    <div className='mt-3 d-flex justify-content-end'>
                                        <div className='reply_style ps-3 pe-2 pt-2 pb-2' style={{ width: "27%" }}>
                                            Son, I've bought the tickets
                                        </div>
                                    </div>
                                    <div className='mt-2 d-flex justify-content-end'>
                                        <div className='time_style'>
                                            09.28 PM <IoCheckmarkDoneOutline className='tick_icon' />
                                        </div>
                                    </div>
                                </div>
                                <div className='chat_line mt-3' />
                                <div className='ps-3 pe-3 mt-3'>
                                    <div className='position-relative'>
                                        <input type="text" placeholder='Write a message...' className='input_p_box' />
                                        <span className='send_circle'>
                                            <IoIosSend style={{ color: "white" }} />
                                        </span>
                                    </div>
                                    <div className='d-flex gap-3'>
                                        <div className='d-flex gap-2 mt-3 icons pe-2 pt-2'>
                                            <CiFaceSmile className='chat_icon' />
                                            <IoIosAttach className='chat_icon' />
                                            <GiElectric className='chat_icon' />
                                        </div>
                                        <button className='payment_btn mt-3'>
                                            Create an Offer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">
                            <div className='chat_list'>
                                <div className='ps-4 pe-3 pt-3'>
                                    <div className='find_browse_style'>
                                        Chats
                                    </div>
                                    <div className='position-relative pt-3'>
                                        <span className='search_icon'>
                                            <IoSearch />
                                        </span>
                                        <input type="text" placeholder='Search people or message...' className='input_p_box ps-5' />
                                    </div>
                                    <div className='find_browse_style pt-3'>
                                        Messages
                                    </div>
                                    <Users />
                                    <Usersmess />
                                    <Users />
                                    <Usersmess />
                                    <Users />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toggle />
        </section>
    )
}