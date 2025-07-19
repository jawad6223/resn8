import React from 'react'
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


export const Toggle = () => {

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
        <>
            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ background: "black" }}>
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
        </>
    )
}
